import { Component, OnInit, AfterViewInit, OnChanges } from '@angular/core';
import { HttpService } from '../http-service.service';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit, AfterViewInit, OnChanges {
  reipientArray: Array<any> = [];

  constructor(private httpService: HttpService,
              private router: Router) {

  }
  myalert = [{
    color: 'green',
    img: 'notes',
    name: 'note',
    count: 0
  },
  {
    color: 'green',
    img: 'inspection',
    name: 'UnderInvestigation',
    count: 0
  },
  {
    color: 'green',
    img: 'action',
    name: 'forward',
    count: 0
  },
  {
    color: 'green',
    img: 'suitcase',
    name: 'held',
    count: 0
  },
  ];
  userName: string;
  alertArray: Array<any> = [];
  alertname: any;
  alert1: string;
  histfilter: string;
  ngOnInit() {
    this.getEvent();
    this.alert1 = this.httpService.alertname1;
    this.httpService.changeheader('Event Details of ' + this.alertname.charAt(0).toUpperCase() + this.alertname.slice(1));
    // this.httpService.alertsreport = 'Alerts Report1';
    this.getRecipients();
  }
  ngOnChanges() {
    this.getRecipients();
}
  ngAfterViewInit() {
    this.getRecipients();
  }
  async getEvent() {
    this.alertname = this.httpService.alertname1;
    this.alertArray = await this.httpService.getEvent(this.alertname).toPromise();
    _(this.alertArray).groupBy('event_type')
      .map((dat, key) => {
        const keyIndex = _.findIndex(this.myalert , {name : key});
        this.myalert[keyIndex] = {
          color: this.myalert[keyIndex].color,
          img: this.myalert[keyIndex].img,
          name: key,
          count: dat.length
        };
      }).value();
  }


  navBack() {
    this.router.navigate(['']);
  }

  async getRecipients() {
    this.reipientArray = await this.httpService.getRecipients().toPromise();
    this.alertArray.map(data => {
      this.reipientArray.map(rdata => {
        if (data.created_by === rdata.user_id) {
          data.userName = rdata.name;
          }  // } else {
        //   // data.userName = data.created_by;

        // }
      });
      console.log('this is testing' + JSON.stringify(data.userName));
      return data;
    });
  }


  histroyfilter(evnt) {
    this.histfilter = evnt;
    console.log('hii  ' + evnt );

  }
}

