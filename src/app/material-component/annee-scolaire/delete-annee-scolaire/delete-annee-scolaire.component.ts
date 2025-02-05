import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-annee-scolaire',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './delete-annee-scolaire.component.html',
  styleUrl: './delete-annee-scolaire.component.scss'
})
export class DeleteAnneeScolaireComponent {

  data: any

  constructor(@Inject(MAT_DIALOG_DATA) public datas: any) {
    this.data = datas
  }
}
