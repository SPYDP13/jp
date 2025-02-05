import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { AddUtilisateurComponent } from './add-utilisateur/add-utilisateur.component';
import { DeleteUtilisateurComponent } from './delete-utilisateur/delete-utilisateur.component';
import { UtilisateurServiceService } from 'src/app/services/Utilisateur/utilisateur-service.service';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [DemoMaterialModule, MatButtonModule, FormsModule, NgFor, NgIf],
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss'],
})
export class UtilisateursComponent implements OnInit {

  listUtilisateurs: any[] = []

  selectedItems = []
  MultipleSelect = false

  constructor(public dialog: MatDialog, public utilisateurService: UtilisateurServiceService) { }

  ngOnInit() {
    this.getAllUtilisateur()
  }


  setMultipleSelect() {
    var value = false
    for (let index = 0; index < this.listUtilisateurs.length; index++) {
      if (this.listUtilisateurs[index].isSelected) {
        value = true
        break
      }
    }
    this.MultipleSelect = value
  }

  openDialog(dialog: number, index: number, update: boolean) { /*1-ReponseDialog, 2-ModifierDialog*/
    var dial: any
    if (dialog === 1) {
      dial = AddUtilisateurComponent
    } else if (dialog === 2) {
      dial = DeleteUtilisateurComponent
    }
    this.dialog.open(dial, {
      data: {
        utilisateur: index !== -1 ? this.listUtilisateurs[index] : {},
        update: update
      }
    }).afterClosed().subscribe(data => {
      console.log(data);
      this.listUtilisateurs.splice(0)
      this.getAllUtilisateur()
    })
  }

  getAllUtilisateur = () => {
    this.utilisateurService.getAll().subscribe(response => {
      console.log(response);
      if (response.ok) {
        var list = response.body
        for (let i = 0; i < list.length; i++) {
          this.listUtilisateurs.push(
            {
              id: list[i].idUtilisateur,
              nom: list[i].nomUtilisateur,
              email: list[i].emailUtilisateur,
              password: list[i].password,
              role: list[i].role,
              ecole: list[i].ecole,
              isSelected: false,
            }
          )
        }


      }

    })
  }

}
