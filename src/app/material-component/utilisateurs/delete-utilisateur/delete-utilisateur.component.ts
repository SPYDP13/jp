import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-utilisateur',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './delete-utilisateur.component.html',
  styleUrl: './delete-utilisateur.component.scss'
})
export class DeleteUtilisateurComponent {
  data: any

  constructor(@Inject(MAT_DIALOG_DATA) public datas: any) {
    this.data = datas
  }
}
