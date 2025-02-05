import { Component, AfterViewInit, OnInit } from '@angular/core';
import { SalesOverviewComponent } from './dashboard-components/sales-overview/sales-overview.component';
import { OurVisiterComponent } from './dashboard-components/our-visiter/our-visiter.component';
import { ProfileComponent } from './dashboard-components/profile/profile.component';
import { ContactsComponent } from './dashboard-components/contacts/contacts.component';
import { ActivityTimelineComponent } from './dashboard-components/activity-timeline/activity-timeline.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DemoMaterialModule } from '../demo-material-module';
import { FormsModule } from '@angular/forms';
import { UtilisateurServiceService } from '../services/Utilisateur/utilisateur-service.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
	selector: 'app-dashboard',
	standalone: true,
	imports: [SalesOverviewComponent, OurVisiterComponent, NgFor, NgIf, ProfileComponent, ContactsComponent, ActivityTimelineComponent, DemoMaterialModule, FormsModule],
	templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit, OnInit {

  listClasses : any[]= []
  listAnnee : any[]= []
  classe: string = '1'
  annee:string = '1'

  listeEcole: any[] = []


  constructor(public utilisateurService: UtilisateurServiceService){}

	ngAfterViewInit() { }


  ngOnInit(): void {
    this.getAllClasse()
    this.getAllAnnee()
    this.getAllEcole(1,1)
  }

  getAllClasse(){
    this.utilisateurService.getAllClasse().subscribe(response=>{
      console.log(response);
      this.listClasses = response.body
    }, err=>{
      console.log(err);
    })
  }
  getAllAnnee(){
    this.utilisateurService.getAllAnnee().subscribe(response=>{
      console.log(response);
      this.listAnnee = response.body
    }, err=>{
      console.log(err);
    })
  }

  getAllEcole(classeId:number, anneeId:number){
    this.utilisateurService.getAllEcoles().subscribe(response=>{
      console.log(response);
      this.listeEcole = response.body
      this.listeEcole.map(item=>{
        this.utilisateurService.getEcoleEleveByClasseAnnee(item.idEcole, classeId, anneeId).subscribe(response2=>{
          item.listEcole = response2.body
        }, err2=>{
          console.log(err2);
        })
      })
    }, err=>{
      console.log(err);
    })
  }

  classeValueChange(event:any){
    this.getAllEcole(Number(event), Number(this.annee))
  }

  anneeValueChange(event:any){
    this.getAllEcole(Number(this.classe), Number(event))
  }


}
