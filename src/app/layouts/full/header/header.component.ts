import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServicesService } from 'src/app/services/App/app-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent implements OnInit {

  constructor(
    public route:Router,
    public appService: AppServicesService
  ){}

  connectedStatus = false

  ngOnInit(): void {

    console.log(this.appService.getToken());
    var token=this.appService.getToken()

    if (token === "") {
      this.connectedStatus = false
    }else{
      this.connectedStatus =true
    }
  }

  deconnect(){
    this.route.navigateByUrl("login")
    this.appService.storeToken('')
    this.appService.storeCurrentRole(AppServicesService.user)
  }
}
