import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class DeleteComponent {

  data: any

  constructor(@Inject(MAT_DIALOG_DATA) public datas: any) {
    this.data = datas
  }
}
