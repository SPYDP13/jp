import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { AddNoteComponent } from './add-note/add-note.component';
import { DeleteNoteComponent } from './delete-note/delete-note.component';


@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [DemoMaterialModule, MatButtonModule, FormsModule, NgFor, NgIf],

  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {

    listNotes = [
    { id: 0, eleve:'Sawadogo Yves Dieudonné', valeur: 20, classe:'CM1', anneeScolaire:'2021-2022', ecole:"LTOP", isSelected: false },
    { id: 0, eleve:'Sawadogo Yves Dieudonné', valeur: 20, classe:'CM1', anneeScolaire:'2021-2022', ecole:"LTOP", isSelected: false },
    { id: 0, eleve:'Sawadogo Yves Dieudonné', valeur: 20, classe:'CM1', anneeScolaire:'2021-2022', ecole:"LTOP", isSelected: false },
    { id: 0, eleve:'Sawadogo Yves Dieudonné', valeur: 20, classe:'CM1', anneeScolaire:'2021-2022', ecole:"LTOP", isSelected: false },
    { id: 0, eleve:'Sawadogo Yves Dieudonné', valeur: 20, classe:'CM1', anneeScolaire:'2021-2022', ecole:"LTOP", isSelected: false },
    { id: 0, eleve:'Sawadogo Yves Dieudonné', valeur: 20, classe:'CM1', anneeScolaire:'2021-2022', ecole:"LTOP", isSelected: false },
  ]
  listAnnee = [
    {id:0, nom:"2021-2022"},
    {id:1, nom:"2021-2022"},
    {id:2, nom:"2021-2022"},
    {id:3, nom:"2021-2022"},
    {id:4, nom:"2021-2022"},
  ]
  listTri = [
    {id:0, nom:"Eleve"},
    {id:1, nom:"Note"},
    {id:2, nom:"Classe"},
    {id:3, nom:"Ecole"},
  ]


  currentAnnee = String(0)
  currentTri = String(0)

  selectedItems = []
  MultipleSelect = false

  constructor(public dialog: MatDialog) { }


  setMultipleSelect() {
    var value = false
    for (let index = 0; index < this.listNotes.length; index++) {
      if (this.listNotes[index].isSelected) {
        value = true
        break
      }
    }
    this.MultipleSelect = value
  }

  openDialog(dialog: number, index: number, update: boolean) { /*1-ReponseDialog, 2-ModifierDialog*/
    var dial: any
    if (dialog === 1) {
      dial = AddNoteComponent
    } else if (dialog === 2) {
      dial = DeleteNoteComponent
    }
    this.dialog.open(dial, {
      data: {
        note: index !== -1 ? this.listNotes[index] : {},
        update: update
      }
    }).afterClosed().subscribe(data => {
      console.log(data);
    })
  }

}
