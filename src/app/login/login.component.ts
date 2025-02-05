import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UtilisateurDto, UtilisateurServiceService } from '../services/Utilisateur/utilisateur-service.service';
import { AppServicesService } from '../services/App/app-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgFor, ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email: string = ""
  password: string = ""
  errorText: string = ""

  constructor(
    public utilisService: UtilisateurServiceService,
    public appService: AppServicesService,
    public route: Router
  ){}

  validate = () =>{
    this.errorText = ""
    var data: UtilisateurDto = {email:this.email, password: this.password}
    this.utilisService.login(data).subscribe(response=>{
      console.log(response);

      if (response.body.status==="SUCCESS") {
        this.appService.storeToken(response.body.token)
        this.appService.storeCurrentRole(response.body.utilisateur.role.nomRole)
        this.appService.storeCurrentUserId(response.body.utilisateur.idUtilisateur)
        if(response.body.utilisateur.role.nomRole===AppServicesService.responsableAdmin){
          this.utilisService.getAdministratorEcole(Number(response.body.utilisateur.idUtilisateur)).subscribe(response=>{
            this.appService.storeCurrentAdminEcoleId(response.body.idEcole)
            this.appService.storeCurrentAdminEcoleNom(response.body.nomEcole)
          },err=>{
            console.log(err);
          })
        }else{
          this.appService.clearCurrentAdminEcoleId()
          this.appService.clearCurrentAdminEcoleNom()
        }
        this.errorText = ""
        this.route.navigateByUrl("dashboard")
      }else{
        this.errorText = response.body.message
      }
    })
  }

}
