import { Utilisateur, UtilisateurServiceService } from './../../services/Utilisateur/utilisateur-service.service';
import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { AddAnneeScolaireComponent } from './add-annee-scolaire/add-annee-scolaire.component';
import { DeleteAnneeScolaireComponent } from './delete-annee-scolaire/delete-annee-scolaire.component';

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [DemoMaterialModule, MatButtonModule, FormsModule, NgFor, NgIf], templateUrl: './annee-scolaire.component.html',
  styleUrls: ['./annee-scolaire.component.scss']
})
export class AnneeScolaireComponent {

  listAnnees = [
    { id: 0, anneeDebut: 2021, anneeFin: 2022, isSelected: false },
    { id: 0, anneeDebut: 2022, anneeFin: 2023, isSelected: false },
    { id: 0, anneeDebut: 2023, anneeFin: 2024, isSelected: false },
    { id: 0, anneeDebut: 2024, anneeFin: 2025, isSelected: false },
    { id: 0, anneeDebut: 2025, anneeFin: 2026, isSelected: false },
  ]

  selectedItems = []
  MultipleSelect = false

  constructor(
    public dialog: MatDialog,
    public utilisateurService: UtilisateurServiceService
  ) { }


  setMultipleSelect() {
    var value = false
    for (let index = 0; index < this.listAnnees.length; index++) {
      if (this.listAnnees[index].isSelected) {
        value = true
        break
      }
    }
    this.MultipleSelect = value
  }

  openDialog(dialog: number, index: number, update: boolean) { /*1-ReponseDialog, 2-ModifierDialog*/
    var dial: any
    if (dialog === 1) {
      dial = AddAnneeScolaireComponent
    } else if (dialog === 2) {
      dial = DeleteAnneeScolaireComponent
    }
    this.dialog.open(dial, {
      data: {
        annee: index !== -1 ? this.listAnnees[index] : {},
        update: update
      }
    }).afterClosed().subscribe(data => {
      console.log(data);
      this.getAllAnneeScolaire()
    })
  }

  getAllAnneeScolaire(){
    this.utilisateurService.getAllAnnee().subscribe(response=>{
      console.log(response);
      this.listAnnees = response.body
      this.listAnnees.map(item=>{
        item.isSelected = false
      })
    }, err=>{
      console.log(err);

    })
  }

}
