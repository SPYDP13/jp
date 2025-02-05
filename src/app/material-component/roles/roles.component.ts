import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { AddRoleComponent } from './add-role/add-role.component';
import { DeleteRoleComponent } from './delete-role/delete-role.component';
import { UtilisateurServiceService } from 'src/app/services/Utilisateur/utilisateur-service.service';


@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [DemoMaterialModule, MatButtonModule, FormsModule, NgFor, NgIf],
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  listRoles: any[] = []

  selectedItems = []
  MultipleSelect = false

  constructor(
    public dialog: MatDialog,
    public utilisateurService: UtilisateurServiceService
  ) { }

  ngOnInit(): void {
    this.getAllRole()
  }


  setMultipleSelect() {
    var value = false
    for (let index = 0; index < this.listRoles.length; index++) {
      if (this.listRoles[index].isSelected) {
        value = true
        break
      }
    }
    this.MultipleSelect = value
  }

  openDialog(dialog: number, index: number, update: boolean) { /*1-ReponseDialog, 2-ModifierDialog*/
    var dial: any
    if (dialog === 1) {
      dial = AddRoleComponent
    } else if (dialog === 2) {
      dial = DeleteRoleComponent
    }
    this.dialog.open(dial, {
      data: {
        role: index !== -1 ? this.listRoles[index] : {},
        update: update
      }
    }).afterClosed().subscribe(data => {
      console.log(data);
    })
  }

  getAllRole() {
    this.utilisateurService.getAllRoles().subscribe(response => {
      var list:any[] = response.body
      this.listRoles.pop()
      list.map(item=>{
        this.listRoles.push({id:item.idRole, nom: item.nomRole, isSelected:false})
      })
    }, (err) => {
      console.log(err);
    })
  }

}
