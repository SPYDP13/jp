import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { UtilisateurServiceService } from 'src/app/services/Utilisateur/utilisateur-service.service';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [DemoMaterialModule, MatButtonModule, FormsModule, NgFor, NgIf],
  templateUrl: './ecoles.component.html',
  styleUrls: ['./ecoles.component.scss']
})
export class EcolesComponent implements OnInit {

  listEcoles: any[] = []

  selectedItems = []
  MultipleSelect = false

  constructor(
    public dialog: MatDialog,
    public utilisateurService: UtilisateurServiceService
  ) { }

  ngOnInit(): void {
    this.getAllEcole()
  }


  setMultipleSelect() {
    var value = false
    for (let index = 0; index < this.listEcoles.length; index++) {
      if (this.listEcoles[index].isSelected) {
        value = true
        break
      }
    }
    this.MultipleSelect = value
  }

  getAllEcole() {
    this.utilisateurService.getAllEcoles().subscribe(response => {
      console.log(response);

      this.listEcoles = response.body
      this.listEcoles.map(item => {
        item.isSelected = false
      })
    }, (err) => {
      console.log(err);
    })

  }

  openDialog(dialog: number, ecoleIndex: number, update: boolean) { /*1-ReponseDialog, 2-ModifierDialog*/
    var dial: any
    if (dialog === 1) {
      dial = AddComponent
    } else if (dialog === 2) {
      dial = DeleteComponent
    }
    this.dialog.open(dial, {
      data: {
        ecole: ecoleIndex !== -1 ? this.listEcoles[ecoleIndex] : {},
        update: update
      }
    }).afterClosed().subscribe(data => {
      console.log(data);
      this.getAllEcole()
    })
  }

}
