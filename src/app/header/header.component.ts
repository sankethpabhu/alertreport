import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpService } from '../http-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor(private httpService: HttpService) {  }
  alertsreport: any;
  ngOnInit() {
    this.httpService.headervar.subscribe(data => {
      this.alertsreport = data;
     });
  }
  ngAfterViewInit() {
  }



}
