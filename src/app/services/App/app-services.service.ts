import { NoteData } from './../Utilisateur/utilisateur-service.service';
import { Injectable } from '@angular/core';
import { UtilisateurServiceService } from '../Utilisateur/utilisateur-service.service';

@Injectable({
  providedIn: 'root'
})
export class AppServicesService {

  /*List des Roles*/
  static superAdmin = "superadmin"
  static responsableAdmin = "administrateur"
  static user = "utilisateur"
  static AllUser = [AppServicesService.superAdmin, AppServicesService.responsableAdmin, AppServicesService.user]

  static currentRole = AppServicesService.superAdmin

  constructor() { }

  storeToken(token: string) {
    localStorage.setItem("token", token)
  }

  getToken() {
    return localStorage.getItem("token")
  }

  storeCurrentAdminEcoleId(id: number){
    return localStorage.setItem("ecoleId", id.toString())
  }
  getCurrentAdminEcoleId(){
    return localStorage.getItem("ecoleId")
  }
  clearCurrentAdminEcoleId(){
    return localStorage.removeItem("ecoleId")
  }

  storeCurrentAdminEcoleNom(nom: string){
    return localStorage.setItem("ecoleNom", nom)
  }
  getCurrentAdminEcolenom(){
    return localStorage.getItem("ecoleNom")
  }
  clearCurrentAdminEcoleNom(){
    return localStorage.removeItem("ecoleNom")
  }


  storeCurrentRole(role: string) {
    localStorage.setItem("role", role)
  }

  getCurrentRole() {
    return localStorage.getItem("role")
  }

  storeCurrentUserId(id: number) {
    localStorage.setItem("userId", id.toString())
  }

  getCurrentUserId() {
    return localStorage.getItem("userId")
  }

}
