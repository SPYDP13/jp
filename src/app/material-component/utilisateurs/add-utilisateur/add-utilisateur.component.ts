import { Utilisateur } from './../../../services/Utilisateur/utilisateur-service.service';
import { NgFor, NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AppServicesService } from 'src/app/services/App/app-services.service';
import { UtilisateurServiceService } from 'src/app/services/Utilisateur/utilisateur-service.service';
@Component({
  selector: 'app-add-utilisateur',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatSelectModule, NgFor, NgIf, FormsModule],
  templateUrl: './add-utilisateur.component.html',
  styleUrl: './add-utilisateur.component.scss'
})
export class AddUtilisateurComponent {
  data: any
  nom: string = ""
  email: string = ""
  password: string = ""
  role: string = ""
  ecole: any

  listRoles: any[] = []
  listEcole: any[] = []

  constructor(
    @Inject(MAT_DIALOG_DATA) public datas: any,
    public dialogRef: MatDialogRef<AddUtilisateurComponent>,
    public utilisateurService: UtilisateurServiceService
  ) {

    this.data = datas
    this.getAllRole()
    this.getAllEcole()

  }


  getAllRole() {
    this.utilisateurService.getAllRoles().subscribe(response => {
      this.listRoles = response.body
    }, (err) => {
      console.log(err);
    })
  }
  getAllEcole() {
    this.utilisateurService.getAllEcoles().subscribe(response => {
      this.listEcole = response.body
    }, (err) => {
      console.log(err);
    })
  }

  validate(){
    if (this.role !== '1') {
      this.ecole = null
    }
    var utilisateur: Utilisateur = {idUtilisateur:0, nomUtilisateur:this.nom, emailUtilisateur:this.email, password:this.password, role:Number(this.role), ecole:this.ecole!==null ? Number(this.ecole): null}
    console.log(utilisateur);

    this.utilisateurService.signup(utilisateur).subscribe(response=>{
      console.log(response);
      this.dialogRef.close()
    },err=>{
      console.log(err);

    })
  }
}
