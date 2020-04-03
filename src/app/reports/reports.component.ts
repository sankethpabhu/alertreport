import {
  Component, OnInit, AfterViewInit, EventEmitter, Output, ViewChild, OnChanges,
  ElementRef
} from '@angular/core';
import { HttpService } from '../http-service.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import * as _ from 'lodash';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit, AfterViewInit, OnChanges {
  @Output() alertNameEvent = new EventEmitter<string>();
  userName: string;
  searchText: string;
  datechanged: string;
  statuschanged1: string;
  constructor(
    private httpService: HttpService,
    private router: Router,
    public datepipe: DatePipe
  ) {

  }

  alertArray: Array<any> = [];
  alertArray1: Array<any> = [];

  ngOnInit() {

    this.getPosts();
    this.httpService.changeheader('Alerts Report');
  }
  ngAfterViewInit() {
  }
  ngOnChanges() {
    this.getPosts();
    this.httpService.changeheader('Alerts Report');
  }

  statusChanged(event) {
    if (event.detail.selectedOption.textContent === 'All ') {
    this.statuschanged1 = '';
  } else {
    this.statuschanged1 = event.detail.selectedOption.textContent;  // detail.selectedOption.textContent or target._selectedIndex
  }
  }

  dateChanged(event) {
    this.datechanged = event.detail.value;
    this.datechanged = this.datepipe.transform(this.datechanged, 'yyyy-MM-dd');
  }
   getPosts() {
    this.userName = 'S0009657696';
    this.httpService.getPosts(this.userName)
      .subscribe(
       resultArray =>  this.alertArray1 = resultArray,
      );
  }
  displayHistory(event) {
    this.httpService.alertname1 = event.alertname;
    this.router.navigate(['/history']);

  }


}
