import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-role',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './delete-role.component.html',
  styleUrl: './delete-role.component.scss'
})
export class DeleteRoleComponent {
  data: any

  constructor(@Inject(MAT_DIALOG_DATA) public datas: any) {
    this.data = datas
  }
}
