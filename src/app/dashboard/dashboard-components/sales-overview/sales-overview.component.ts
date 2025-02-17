import { NgFor } from "@angular/common";
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  ApexGrid,
  NgApexchartsModule
} from "ng-apexcharts";
import { DemoMaterialModule } from "src/app/demo-material-module";
import { UtilisateurServiceService } from "src/app/services/Utilisateur/utilisateur-service.service";

export interface ChartOptions {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  dataLabels: ApexDataLabels | any;
  plotOptions: ApexPlotOptions | any;
  yaxis: ApexYAxis | any;
  xaxis: ApexXAxis | any;
  fill: ApexFill | any;
  tooltip: ApexTooltip | any;
  stroke: ApexStroke | any;
  legend: ApexLegend | any;
  grid: ApexGrid | any;
}

@Component({
  selector: "app-sales-overview",
  standalone: true,
  imports: [NgApexchartsModule, DemoMaterialModule, FormsModule, NgFor],
  templateUrl: "./sales-overview.component.html",
  styleUrls:["./styles.scss"]
})
export class SalesOverviewComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent = Object.create(null);
  public chartOptions: Partial<ChartOptions>;

  annee = "2024-2025"
  anneeId="1"
  classeId="6"
  listAnnee:any[] = []
  listClasses:any[] = []
  listeEcole:any[] = []

  labels: any[]=[]
  values:any[]=[]

  anneeValueChange(event:any){
    this.listAnnee.map(item=>{
      if (item.idAnneeScolaire === Number(event)) {
        this.annee = `${item.anneeDebut}-${item.anneeFin}`
      }
    })
  }

  getAllAnnee(){
    this.utilisateurService.getAllAnnee().subscribe(response=>{
      this.listAnnee = response.body
    }, err=>{

    })
  }

  getAllEcole(classeId:number, anneeId:number){
    this.utilisateurService.getAllEcoles().subscribe(response=>{
      this.listeEcole = response.body
      this.listeEcole.map((item, index)=>{
        this.utilisateurService.getEcoleEleveByClasseAnnee(item.idEcole, classeId, anneeId).subscribe(response2=>{
          item.listEcole = response2.body //item.listecole c'est liste eleve, une erreur de recupération des données

          var successCount = 0
          for (let index = 0; index < item.listEcole.length; index++) { //Calcul des notes
            var generale = this.calculeNote(item.listEcole[index])
            item.listEcole[index].generale = generale
            if (generale >= 10) {
              successCount++
            }
          }
          item.taux = (successCount/item.listEcole.length)*100
          this.labels.push(item.nomEcole)
          this.values.push(item.taux)
        }, err2=>{

        })
      })
      this.initGraph()
    }, err=>{

    })
  }

  getAllClasse(){
    this.utilisateurService.getAllClasse().subscribe(response=>{
      this.listClasses = response.body
      this.classeId = String(this.listClasses[0].idNiveau)
    }, err=>{

    })
  }



  calculeNote(eleve:any){
    var total = 0
    var totalCoef = 0
    for (let index = 0; index < eleve.listNote.length; index++) {
      var valNote = eleve.listNote[index].valeur
      var noteCoef = eleve.listNote[index].matiere.coef
      total = total + valNote*noteCoef
      totalCoef = totalCoef + noteCoef
    }
    return (total/totalCoef)
  }

  constructor(public utilisateurService:UtilisateurServiceService) {

    this.getAllEcole(Number(this.classeId), Number(this.anneeId))
    this.chartOptions={}



  }

  initGraph(){
    this.chartOptions = {
      series: [
        {
          name: "Valeur",
          data: this.values
        },
        // {
        //   name: "Ample",
        //   data: [76, 85, 101, 98, 87, 105],
        // },
      ],
      chart: {
        type: "bar",
        fontFamily: "Poppins,sans-serif",
        height: 320,
      },
      grid: {
        borderColor: "rgba(0,0,0,.2)",
        strokeDashArray: 3,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "30%",
          borderRadius: 8,
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: this.labels,
      },

      legend: {
        show: false,
      },
      fill: {
        colors: ["#26c6da", "#1e88e5"],
        opacity: 1,
      },
      tooltip: {
        theme: "dark",
      },
    };
  }


  ngOnInit(): void {
    this.getAllAnnee()
    this.getAllClasse()
    setTimeout(()=>{this.anneeValueChange(1)}, 1000)
  }
}
