import { NgFor, NgIf } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatiereData, UtilisateurServiceService } from 'src/app/services/Utilisateur/utilisateur-service.service';

@Component({
  selector: 'app-add-matiere',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatSelectModule, NgFor, NgIf, FormsModule],
  templateUrl: './add-matiere.component.html',
  styleUrl: './add-matiere.component.scss'
})
export class AddMatiereComponent implements OnInit {

  data: any

  niveauList: any[] = []

  nom:string = ""
  niveau: string = ""
  coef: string = ""

  constructor(
    @Inject(MAT_DIALOG_DATA) public datas: any,
    public dialogRef:MatDialogRef<AddMatiereComponent>,
    public utilisateurService: UtilisateurServiceService
  ) {
    this.data = datas
  }

  ngOnInit(): void {
    this.getAllNiveauClasse()
  }

  getAllNiveauClasse(){
    this.utilisateurService.getAllClasse().subscribe(response=>{
      console.log(response);
      this.niveauList = response.body
    },err=>{
      console.log(err);

    })
  }
  validate(){
    var matiere: MatiereData = {nomMatiere: this.nom, coef: Number(this.coef), niveau_classe: Number(this.niveau)}
    this.utilisateurService.createMatieres(matiere).subscribe(response=>{
      console.log(response);
      this.dialogRef.close()
    },err=>{
      console.log(err);
    })
  }

}
