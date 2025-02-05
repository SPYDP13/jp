import { Injectable } from '@angular/core';
import { AppServicesService } from '../App/app-services.service';

export const PERMISSIONS = [
  { nom: "dashoardMenu", description: "Peut acceder au menu dashboard", roles: AppServicesService.AllUser },
  { nom: "ecoleMenu", description: "Peut acceder au menu ecole", roles: [AppServicesService.superAdmin] },
  { nom: "matiereMenu", description: "Peut acceder au menu matière", roles: [AppServicesService.superAdmin, AppServicesService.responsableAdmin] },
  { nom: "anneeMenu", description: "Peut acceder au menu année scolaire", roles: [AppServicesService.superAdmin] },
  { nom: "classeMenu", description: "Peut acceder au menu classe", roles: [AppServicesService.superAdmin, AppServicesService.responsableAdmin] },
  { nom: "roleMenu", description: "Peut acceder au menu role", roles: [AppServicesService.superAdmin] },
  { nom: "utilisateurMenu", description: "Peut acceder au menu utilisateur", roles: [AppServicesService.superAdmin] },
  { nom: "villeMenu", description: "Peut acceder au menu ville", roles: [AppServicesService.superAdmin] },
  { nom: "noteMenu", description: "Peut acceder au menu note", roles: [AppServicesService.superAdmin] },
  { nom: "eleveMenu", description: "Peut acceder au menu eleve", roles: [AppServicesService.responsableAdmin] },
  { nom: "MonEcoleMenu", description: "Peut acceder au menu ùmon ecole", roles: [AppServicesService.responsableAdmin] },
]

@Injectable({
  providedIn: 'root'
})
export class PermissionServicesService {

  static DashboardMenu = "dashoardMenu"
  static EcoleMenu = "ecoleMenu"
  static MatiereMenu = "matiereMenu"
  static AnneeMenu = "anneeMenu"
  static ClasseMenu = "classeMenu"
  static RoleMenu = "roleMenu"
  static UtilisateurMenu = "utilisateurMenu"
  static VilleMenu = "villeMenu"
  static NoteMenu = "noteMenu"
  static EleveMenu = "eleveMenu"
  static MonEcoleMenu = "MonEcoleMenu"

  constructor(
    public appService: AppServicesService
  ) { }


  checkIfRoleHasPermission(permission: string) {
    var response = false
    PERMISSIONS.map(value => {
      if (value.nom === permission) {
        for (let index = 0; index < value.roles.length; index++) {
          if (value.roles[index] === this.appService.getCurrentRole()) {
            response = true
            break
          }
        }
      }
    })
    return response
  }

}
