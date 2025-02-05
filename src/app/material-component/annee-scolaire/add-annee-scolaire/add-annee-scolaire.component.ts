import { NgFor, NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AnneeData, UtilisateurServiceService } from 'src/app/services/Utilisateur/utilisateur-service.service';


@Component({
  selector: 'app-add-annee-scolaire',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatSelectModule, NgFor, NgIf, FormsModule],
  templateUrl: './add-annee-scolaire.component.html',
  styleUrl: './add-annee-scolaire.component.scss'
})
export class AddAnneeScolaireComponent {
  data: any
  anneeDebut: string = "2025"
  anneeFin: string = "2026"


  constructor(
    @Inject(MAT_DIALOG_DATA) public datas: any,
    public dialogRef: MatDialogRef<AddAnneeScolaireComponent>,
    public utilisateurService: UtilisateurServiceService
  ) {
    this.data = datas
  }

  validate() {
    var annee: AnneeData = { anneeDebut: Number(this.anneeDebut), anneeFin: Number(this.anneeFin) }
    this.utilisateurService.createAnnee(annee).subscribe(response => {
      console.log(response);
      this.dialogRef.close()
    }, err => {
      console.log(err);

    })
  }
}
