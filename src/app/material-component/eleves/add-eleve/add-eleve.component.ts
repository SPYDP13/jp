import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { AppServicesService } from 'src/app/services/App/app-services.service';
import { EleveData, NoteData, NoteData2, UtilisateurServiceService, MatiereData } from 'src/app/services/Utilisateur/utilisateur-service.service';

@Component({
  selector: 'app-add-eleve',
  standalone: true,
  imports: [DemoMaterialModule, MatButtonModule, FormsModule, NgFor, NgIf],
  templateUrl: './add-eleve.component.html',
  styleUrl: './add-eleve.component.scss'
})
export class AddEleveComponent implements OnInit {

  nom = ''
  dtn = ''
  matricule = ''
  ecole = ''

  noteNombre = 0
  listeNote: NoteData2[] = []
  filteredMatiere: any[] = []

  constructor(
    public utilisateurService: UtilisateurServiceService,
    public appService: AppServicesService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.ecole = this.appService.getCurrentAdminEcolenom()!!
    this.getAllClasse()
    this.getAllAnnee()
    this.getAllMatiere()
  }

  listMatieres: any[] = []

  listClasses: any[] = []

  listAnnees: any[] = []

  addNote = () => {
    this.listeNote.push(
      {
        anneeScolaire: 1,
        classe: '',
        noteListe: []
      }
    )
  }

  classeValueChange = (id: number, item: any) => {
    var filteredMatiereByClass = this.listMatieres.filter(item => item.niveau_classe.idNiveau === Number(id))

    item.noteListe.splice(0)
    filteredMatiereByClass.map(item2 => {
      item.noteListe.push({
        valeur:0,
        anneeScolaire:item.anneeScolaire,
        matiere:item2.idMatiere,
      })
    })

    console.log(this.listeNote);

    console.log(filteredMatiereByClass);
    console.log(id);

  }

  getMatiereNom(id:number){
    var matiere = ""
    this.listMatieres.map(item=>{
      if (item.idMatiere===id) {
        matiere = item.nomMatiere
      }
    })
    return matiere
  }

  getAllClasse() {
    this.utilisateurService.getAllClasse().subscribe(response => {
      console.log(response);
      this.listClasses = response.body
      this.listClasses.map(item => {
        item.isSelected = false
      })
    }, err => {
      console.log(err);
    })
  }

  getAllAnnee() {
    this.utilisateurService.getAllAnnee().subscribe(response => {
      console.log(response);
      this.listAnnees = response.body
      this.listAnnees.map(item => {
        item.isSelected = false
      })
    }, err => {
      console.log(err);
    })
  }
  getAllMatiere() {
    this.utilisateurService.getAllMatiere().subscribe(response => {
      console.log(response);
      this.listMatieres = response.body
      this.listMatieres.map(item => {
        item.isSelected = false
      })
    }, err => {
      console.log(err);
    })
  }

  deleteNote(i:number){
    this.listeNote.splice(i, 1)
  }

  validate() {
    var notes: NoteData[] = []
    this.listeNote.map(item => {
      item.noteListe.map(item2 => {
        notes.push(
          { anneeScolaire: item.anneeScolaire, matiere: item2.matiere, valeur: item2.valeur }
        )
      })

    })
    var eleve: EleveData = {
      dateNaissance: this.dtn,
      nomEleve: this.nom,
      matricule: this.matricule,
      listNote: notes,
      ecole:Number(this.appService.getCurrentAdminEcoleId())
    }

    console.log(eleve);
    this.utilisateurService.createEleve(eleve).subscribe(response=>{
      console.log(response);
      this.router.navigateByUrl('eleves')

    }, err=>{
      console.log(err);

    })

  }

}
