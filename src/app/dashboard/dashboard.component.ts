import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public usercount: any = 0;
  public subscount: any = 0;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.getUsersCount();
    this.getSubscriptionsCount();
  }

  getUsersCount() {
    let _base = this;
    _base.http.getnewusercount()
      .then(function (success: any) {
        console.log(success);
        _base.usercount = success.result;
        _base.http.changeusercount(_base.usercount);
      }, function (error) {
        console.log(error);
      });
  }

  getSubscriptionsCount() {
    let _base = this;
    _base.http.getnewsubscriptioncount()
      .then(function (success: any) {
        console.log(success);
        _base.subscount = success.result;
        _base.http.changesubscount(_base.subscount);
      }, function (error) {
        console.log(error);
      });
  }

}
