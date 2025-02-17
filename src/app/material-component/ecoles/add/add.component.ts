import { NgFor, NgIf } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AppServicesService } from 'src/app/services/App/app-services.service';
import { EcoleData, UtilisateurServiceService } from 'src/app/services/Utilisateur/utilisateur-service.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatSelectModule, NgFor, NgIf, FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent implements OnInit {

  data: any

  nom: string = ""
  ville: string = ""

  villeList: any[] = []



  constructor(
    @Inject(MAT_DIALOG_DATA) public datas: any,
    public dialogRef: MatDialogRef<AddComponent>,
    public utilisateurService: UtilisateurServiceService,
  ) {
    this.data = datas
  }

  ngOnInit(): void {
    this.getAllVilles()
  }

  getAllVilles() {
    this.utilisateurService.getAllVilles().subscribe(response => {
      console.log(response);
      this.villeList = response.body
    }, err => {
      console.log(err);

    })
  }

  validate() {
    var ecole: EcoleData = {nomEcole: this.nom, ville:Number(this.ville), listEleves:[]}
    this.utilisateurService.createEcoles(ecole).subscribe(response=>{
      console.log(response);
      this.dialogRef.close()
    }, err=>{
      console.log(err);

    })
  }



}
