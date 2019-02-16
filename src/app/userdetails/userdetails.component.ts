import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  public user: any = {};
  public from: string = "";
  public subsendDate = "";
  public regDate = "";

  constructor(public route: ActivatedRoute, public http: HttpService) { }

  ngOnInit() {
    let _base = this;
    this.route.queryParams.subscribe(params => {
      _base.user = JSON.parse(params["user"]);
      _base.from = _base.user.updatedDate;

      console.log("From", _base.from);

      _base.updateUser();
      console.log(_base.user);
      let d = new Date(_base.user.createdDate);
      _base.regDate = d.toDateString().substring(0, 15);
      let ed = new Date(_base.user.subscription[_base.user.subscription.length - 1].endDate);
      _base.subsendDate = ed.toDateString().substring(0, 15);
    });
  }

  updateUser() {
    let _base = this;
    let userdata = {};
    if (_base.from == "user") {
      userdata = {
        reg_view: true
      }
    } else if (_base.from == "subs") {
      userdata = {
        subs_view: true
      }
    } else {
      userdata = {
      }
    }

    _base.http.updateuser(_base.user._id, userdata)
      .then(function (success) {
        console.log(success);
        _base.getSubscriptionsCount();
        _base.getUsersCount();
      }, function (error) {
        console.log(error);
      });
  }

  getUsersCount() {
    let _base = this;
    _base.http.getnewusercount()
      .then(function (success: any) {
        console.log(success);
        _base.http.changeusercount(success.result);
      }, function (error) {
        console.log(error);
      });
  }

  getSubscriptionsCount() {
    let _base = this;
    _base.http.getnewsubscriptioncount()
      .then(function (success: any) {
        console.log(success);
        _base.http.changesubscount(success.result);
      }, function (error) {
        console.log(error);
      });
  }

}
