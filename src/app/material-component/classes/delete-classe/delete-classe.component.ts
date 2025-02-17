import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { UtilisateurServiceService } from 'src/app/services/Utilisateur/utilisateur-service.service';

@Component({
  selector: 'app-delete-classe',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './delete-classe.component.html',
  styleUrl: './delete-classe.component.scss'
})
export class DeleteClasseComponent {
  data: any

  constructor(
    @Inject(MAT_DIALOG_DATA) public datas: any,
    public dialogRef: MatDialogRef<DeleteClasseComponent>,
    public utilisateurService: UtilisateurServiceService
  ) {
    this.data = datas
    console.log(this.data);

  }

  deleteClasse(){
    this.utilisateurService.deleteClasse(this.data.classe.idNiveau).subscribe(response=>{
      console.log(response);
      this.dialogRef.close()
    },err=>{console.log(err);
    })
  }
}
