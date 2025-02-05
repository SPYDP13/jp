import { NgFor, NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { UtilisateurServiceService, VilleData } from 'src/app/services/Utilisateur/utilisateur-service.service';

@Component({
  selector: 'app-add-ville',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatSelectModule, NgFor, NgIf, FormsModule],
  templateUrl: './add-ville.component.html',
  styleUrl: './add-ville.component.scss'
})
export class AddVilleComponent {
  data: any
  nom: string = ""

  constructor(
    @Inject(MAT_DIALOG_DATA) public datas: any,
    public dialogRef: MatDialogRef<AddVilleComponent>,
    public utilisateurService: UtilisateurServiceService
  ) {
    this.data = datas
  }

  validate(){
    var ville: VilleData = {idVille:0, nomVille:this.nom}
    this.utilisateurService.createVille(ville).subscribe(response=>{
      console.log(response);
      this.dialogRef.close()
    }, err=>{
      console.log(err);

    })
  }
}
