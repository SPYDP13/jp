import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-matiere',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './delete-matiere.component.html',
  styleUrl: './delete-matiere.component.scss'
})
export class DeleteMatiereComponent {

  data: any

  constructor(@Inject(MAT_DIALOG_DATA) public datas: any) {
    this.data = datas
  }
}
