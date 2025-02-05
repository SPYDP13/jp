import { NgFor, NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ClasseData, UtilisateurServiceService } from 'src/app/services/Utilisateur/utilisateur-service.service';


@Component({
  selector: 'app-add-classe',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatSelectModule, NgFor, NgIf, FormsModule],
  templateUrl: './add-classe.component.html',
  styleUrl: './add-classe.component.scss'
})
export class AddClasseComponent {
  data: any
  nomClasse:string = ""


  constructor(
    @Inject(MAT_DIALOG_DATA) public datas: any,
    public dialogRef: MatDialogRef<AddClasseComponent>,
    public utilisateurService: UtilisateurServiceService
  ) {
    this.data = datas
  }

  validate(){
    var classe: ClasseData = {idNiveau:0, nomNiveau:this.nomClasse}
    this.utilisateurService.createClasse(classe).subscribe(response=>{
      console.log(response);
      this.dialogRef.close()
    }, err=>{
      console.log(err);
    })
  }

}
