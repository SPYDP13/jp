import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { AddClasseComponent } from './add-classe/add-classe.component';
import { DeleteClasseComponent } from './delete-classe/delete-classe.component';
import { UtilisateurServiceService } from 'src/app/services/Utilisateur/utilisateur-service.service';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [DemoMaterialModule, MatButtonModule, FormsModule, NgFor, NgIf],
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  listClasses: any[] = []

  selectedItems = []
  MultipleSelect = false

  constructor(
    public dialog: MatDialog,
    public utilisateurService: UtilisateurServiceService
  ) { }

  ngOnInit(): void {
    this.getAllClasse()
  }

  setMultipleSelect() {
    var value = false
    for (let index = 0; index < this.listClasses.length; index++) {
      if (this.listClasses[index].isSelected) {
        value = true
        break
      }
    }
    this.MultipleSelect = value
  }

  openDialog(dialog: number, index: number, update: boolean) { /*1-ReponseDialog, 2-ModifierDialog*/
    var dial: any
    if (dialog === 1) {
      dial = AddClasseComponent
    } else if (dialog === 2) {
      dial = DeleteClasseComponent
    }
    this.dialog.open(dial, {
      data: {
        classe: index !== -1 ? this.listClasses[index] : {},
        update: update
      }
    }).afterClosed().subscribe(data => {
      console.log(data);
      this.getAllClasse()
    })
  }

  getAllClasse(){
    this.utilisateurService.getAllClasse().subscribe(response=>{
      console.log(response);
      this.listClasses = response.body
      this.listClasses.map(item=>{
        item.isSelected = false
      })

    }, err=>{
      console.log(err);
    })
  }



}
