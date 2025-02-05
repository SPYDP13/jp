import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-ville',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './delete-ville.component.html',
  styleUrl: './delete-ville.component.scss'
})
export class DeleteVilleComponent {
  data: any

  constructor(@Inject(MAT_DIALOG_DATA) public datas: any) {
    this.data = datas
  }
}
