import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppServicesService } from '../App/app-services.service';
import { environment } from 'src/environments/environment';


export interface UtilisateurDto {
  email: string,
  password: string
}

export interface Utilisateur {
  idUtilisateur: number
  nomUtilisateur: string
  emailUtilisateur: string
  password: string
  role: number
  ecole: number | null
}
export interface EcoleData {
  nomEcole: string
  ville: number
  listEleves: number[]
}
export interface VilleData {
  idVille: number
  nomVille: string
}

export interface AnneeData {
  anneeDebut: number
  anneeFin: number
}
export interface ClasseData {
  idNiveau: number
  nomNiveau: string
}
export interface MatiereData {
  nomMatiere: string
  coef: number
  niveau_classe: number
}
export interface EleveData {
  nomEleve: string
  dateNaissance: string
  matricule: string
  listNote: NoteData[]
  ecole:number
}
export interface NoteData {
  valeur: number
  anneeScolaire: number
  matiere: number
}
export interface NoteData2 {
  anneeScolaire: number
  classe: any
  noteListe: NoteData[]
}


@Injectable({
  providedIn: 'root'
})
export class UtilisateurServiceService {

  api = environment.baseUrl

  constructor(
    public http: HttpClient,
    public appService: AppServicesService,
  ) { }

  // public getTicketStatistics(): Observable<HttpResponse<any>> {
  //   var headers = new HttpHeaders({
  //     "Content-Type": "application/json",
  //     "Accept": "application/json",
  //     "Authorization": 'Bearer ' + this.appService.getToken()
  //   })
  //   return this.http.get<HttpResponse<any>>(`${this.api}/statistics`, { observe: "response", headers: headers, withCredentials: true })
  // }
  public login(utilisateurDto: UtilisateurDto): Observable<HttpResponse<any>> {
    var headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json",
    })
    return this.http.post<HttpResponse<any>>(`${this.api}/login`, utilisateurDto, { observe: "response", headers: headers, withCredentials: true })
  }

  public signup(utilisateur: Utilisateur): Observable<HttpResponse<any>> {
    var headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": 'Bearer ' + this.appService.getToken()
    })
    return this.http.post<HttpResponse<any>>(`${this.api}/signup`, utilisateur, { observe: "response", headers: headers, withCredentials: true })
  }
  public getAll(): Observable<HttpResponse<any>> {
    var headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": 'Bearer ' + this.appService.getToken()
    })
    return this.http.get<HttpResponse<any>>(`${this.api}/getAll`, { observe: "response", headers: headers, withCredentials: true })
  }
  public getAllRoles(): Observable<HttpResponse<any>> {
    var headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": 'Bearer ' + this.appService.getToken()
    })
    return this.http.get<HttpResponse<any>>(`${this.api}/roles/getAll`, { observe: "response", headers: headers, withCredentials: true })
  }
  public getAllEcoles(): Observable<HttpResponse<any>> {
    var headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": 'Bearer ' + this.appService.getToken()
    })
    return this.http.get<HttpResponse<any>>(`${this.api}/ecoles/getAll`, { observe: "response", headers: headers, withCredentials: true })
  }
  public createEcoles(ecole: EcoleData): Observable<HttpResponse<any>> {
    var headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": 'Bearer ' + this.appService.getToken()
    })
    return this.http.post<HttpResponse<any>>(`${this.api}/ecoles/create`, ecole, { observe: "response", headers: headers, withCredentials: true })
  }
  public getEcoleElevesList(ecoleId: number): Observable<HttpResponse<any>> {
    var headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": 'Bearer ' + this.appService.getToken()
    })
    return this.http.get<HttpResponse<any>>(`${this.api}/ecoles/getEleve/${ecoleId}`, { observe: "response", headers: headers, withCredentials: true })
  }
  public getEcoleEleveByClasseAnnee(ecoleId: number, classeId:number, anneeId:number): Observable<HttpResponse<any>> {
    var headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": 'Bearer ' + this.appService.getToken()
    })
    return this.http.get<HttpResponse<any>>(`${this.api}/ecoles/getEleveByClasseAnnee/${ecoleId}/${classeId}/${anneeId}`, { observe: "response", headers: headers, withCredentials: true })
  }
  public getAllVilles(): Observable<HttpResponse<any>> {
    var headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": 'Bearer ' + this.appService.getToken()
    })
    return this.http.get<HttpResponse<any>>(`${this.api}/villes/getAll`, { observe: "response", headers: headers, withCredentials: true })
  }
  public createVille(ville: VilleData): Observable<HttpResponse<any>> {
    var headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": 'Bearer ' + this.appService.getToken()
    })
    return this.http.post<HttpResponse<any>>(`${this.api}/villes/create`, ville, { observe: "response", headers: headers, withCredentials: true })
  }
  public getAllAnnee(): Observable<HttpResponse<any>> {
    var headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": 'Bearer ' + this.appService.getToken()
    })
    return this.http.get<HttpResponse<any>>(`${this.api}/anneeScolaires/getAll`, { observe: "response", headers: headers, withCredentials: true })
  }
  public createAnnee(annee: AnneeData): Observable<HttpResponse<any>> {
    var headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": 'Bearer ' + this.appService.getToken()
    })
    return this.http.post<HttpResponse<any>>(`${this.api}/anneeScolaires/create`, annee, { observe: "response", headers: headers, withCredentials: true })
  }
  public getAllClasse(): Observable<HttpResponse<any>> {
    var headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": 'Bearer ' + this.appService.getToken()
    })
    return this.http.get<HttpResponse<any>>(`${this.api}/niveauClasses/getAll`, { observe: "response", headers: headers, withCredentials: true })
  }
  public createClasse(classe: ClasseData): Observable<HttpResponse<any>> {
    var headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": 'Bearer ' + this.appService.getToken()
    })
    return this.http.post<HttpResponse<any>>(`${this.api}/niveauClasses/create`, classe, { observe: "response", headers: headers, withCredentials: true })
  }
  public deleteClasse(id: number): Observable<HttpResponse<any>> {
    var headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": 'Bearer ' + this.appService.getToken()
    })
    return this.http.get<HttpResponse<any>>(`${this.api}/niveauClasses/delete/${id}`, { observe: "response", headers: headers, withCredentials: true })
  }

  public getAllMatiere(): Observable<HttpResponse<any>> {
    var headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": 'Bearer ' + this.appService.getToken()
    })
    return this.http.get<HttpResponse<any>>(`${this.api}/matieres/getAll`, { observe: "response", headers: headers, withCredentials: true })
  }
  public createMatieres(matiere: MatiereData): Observable<HttpResponse<any>> {
    var headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": 'Bearer ' + this.appService.getToken()
    })
    return this.http.post<HttpResponse<any>>(`${this.api}/matieres/create`, matiere, { observe: "response", headers: headers, withCredentials: true })
  }

  public getAllEleve(): Observable<HttpResponse<any>> {
    var headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": 'Bearer ' + this.appService.getToken()
    })
    return this.http.get<HttpResponse<any>>(`${this.api}/eleves/getAll`, { observe: "response", headers: headers, withCredentials: true })
  }
  public createEleveToEcole(ecoleId: number, eleve: EleveData): Observable<HttpResponse<any>> {
    var headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": 'Bearer ' + this.appService.getToken()
    })
    return this.http.post<HttpResponse<any>>(`${this.api}/ecoles/addEleve/${ecoleId}`, eleve, { observe: "response", headers: headers, withCredentials: true })
  }
  public createEleve(eleve: EleveData): Observable<HttpResponse<any>> {
    var headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": 'Bearer ' + this.appService.getToken()
    })
    return this.http.post<HttpResponse<any>>(`${this.api}/eleves/create`, eleve, { observe: "response", headers: headers, withCredentials: true })
  }
  public getEleveById(id: number): Observable<HttpResponse<any>> {
    var headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": 'Bearer ' + this.appService.getToken()
    })
    return this.http.get<HttpResponse<any>>(`${this.api}/eleves/getById/${id}`, { observe: "response", headers: headers, withCredentials: true })
  }

  public getAdministratorEcole(id: number): Observable<HttpResponse<any>> {
    var headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": 'Bearer ' + this.appService.getToken()
    })
    return this.http.get<HttpResponse<any>>(`${this.api}/getEcole/${id}`, { observe: "response", headers: headers, withCredentials: true })
  }
}
