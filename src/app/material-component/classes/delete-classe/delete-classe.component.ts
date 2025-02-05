import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-classe',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './delete-classe.component.html',
  styleUrl: './delete-classe.component.scss'
})
export class DeleteClasseComponent {
  data: any

  constructor(@Inject(MAT_DIALOG_DATA) public datas: any) {
    this.data = datas
  }
}
