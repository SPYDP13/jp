import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { AddMatiereComponent } from './add-matiere/add-matiere.component';
import { DeleteMatiereComponent } from './delete-matiere/delete-matiere.component';
import { UtilisateurServiceService } from 'src/app/services/Utilisateur/utilisateur-service.service';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [DemoMaterialModule, MatGridListModule, NgFor, MatButtonModule, FormsModule, NgIf],
  templateUrl: './matieres.component.html',
  styleUrls: ['./matieres.component.scss']
})
export class MatieresComponent implements OnInit {
  listMatieres: any[] = []

  selectedItems = []
  MultipleSelect = false

  constructor(
    public dialog: MatDialog,
    public utilisateurService: UtilisateurServiceService
  ) { }

  ngOnInit(): void {
    this.getAllMatiere()
  }


  setMultipleSelect(){
    var value = false
    for (let index = 0; index < this.listMatieres.length; index++) {
      if (this.listMatieres[index].isSelected) {
        value = true
        break
      }
    }
    this.MultipleSelect = value
  }

  openDialog(dialog:number, index: number,update:boolean) { /*1-ReponseDialog, 2-ModifierDialog*/
    var dial:any
    if (dialog===1) {
      dial = AddMatiereComponent
    }else if(dialog===2){
      dial = DeleteMatiereComponent
    }
    this.dialog.open(dial, {
      data: {
        matiere: index!==-1 ? this.listMatieres[index]: {},
        update: update
      }
    }).afterClosed().subscribe(data => {
      console.log(data);
      this.getAllMatiere()
    })
  }

  getAllMatiere(){
    this.utilisateurService.getAllMatiere().subscribe(response=>{
      console.log(response);
      this.listMatieres = response.body
      this.listMatieres.map(item=>{
        item.isSelected = false
      })
    }, err=>{
      console.log(err);

    })
  }

}
