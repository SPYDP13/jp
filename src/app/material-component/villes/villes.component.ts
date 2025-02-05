import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { AddVilleComponent } from './add-ville/add-ville.component';
import { DeleteVilleComponent } from './delete-ville/delete-ville.component';
import { UtilisateurServiceService } from 'src/app/services/Utilisateur/utilisateur-service.service';

@Component({
  selector: 'app-expansion',
  standalone: true,
  imports: [DemoMaterialModule, MatButtonModule, FormsModule, NgFor, NgIf],
  templateUrl: './villes.component.html',
  styleUrls: ['./villes.component.scss']
})
export class VillesComponent implements OnInit {
  listVilles: any[]= []

  selectedItems = []
  MultipleSelect = false

  constructor(
    public dialog: MatDialog,
    public utilisateurService: UtilisateurServiceService
  ) { }


  ngOnInit(): void {
    this.getAllVilles()
  }


  setMultipleSelect() {
    var value = false
    for (let index = 0; index < this.listVilles.length; index++) {
      if (this.listVilles[index].isSelected) {
        value = true
        break
      }
    }
    this.MultipleSelect = value
  }

  getAllVilles() {
    this.utilisateurService.getAllVilles().subscribe(response => {
      console.log(response);
      this.listVilles = response.body
      this.listVilles.map(item=>{
        item.isSelected = false
      })
    }, err => {
      console.log(err);

    })
  }

  openDialog(dialog: number, index: number, update: boolean) { /*1-ReponseDialog, 2-ModifierDialog*/
    var dial: any
    if (dialog === 1) {
      dial = AddVilleComponent
    } else if (dialog === 2) {
      dial = DeleteVilleComponent
    }
    this.dialog.open(dial, {
      data: {
        ville: index !== -1 ? this.listVilles[index] : {},
        update: update
      }
    }).afterClosed().subscribe(data => {
      console.log(data);
      this.getAllVilles()
    })
  }

}
