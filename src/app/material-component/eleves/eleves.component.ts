import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { AddEleveComponent } from './add-eleve/add-eleve.component';
import { DeleteEleveComponent } from './delete-eleve/delete-eleve.component';
import { Router } from '@angular/router';
import { UtilisateurServiceService } from 'src/app/services/Utilisateur/utilisateur-service.service';
import { AppServicesService } from 'src/app/services/App/app-services.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [DemoMaterialModule, MatButtonModule, FormsModule, NgFor, NgIf],
  templateUrl: './eleves.component.html',
  styleUrls: ['./eleves.component.scss']
})
export class ElevesComponent implements OnInit {

  /*A FAIREE

  Calculer la note générale annuelle
  */

  listEleves: any[] = []

  selectedItems = []
  MultipleSelect = false

  constructor(
    public dialog: MatDialog,
    public route: Router,
    public utilisateurService: UtilisateurServiceService,
    public appService: AppServicesService,
  ) { }

  ngOnInit(): void {
   this.getAllEleve()
  }


  setMultipleSelect() {
    var value = false
    for (let index = 0; index < this.listEleves.length; index++) {
      if (this.listEleves[index].isSelected) {
        value = true
        break
      }
    }
    this.MultipleSelect = value
  }


  addEleves = () => {
    this.route.navigateByUrl('add-eleve')
  }

  updateEleves = (id: number) => {
    this.route.navigateByUrl('add-eleve')
  }

  deleteEleves = (id: number) => {
    this.route.navigateByUrl('delete-eleve')
  }

  getAllEleve() {
    this.utilisateurService.getEcoleElevesList(Number(this.appService.getCurrentAdminEcoleId())).subscribe(response => {
      console.log(response);
      this.listEleves = response.body
      this.listEleves.map(item => {
        item.isSelected = false
      })
    }, err => {
      console.log(err);

    })
  }


}
