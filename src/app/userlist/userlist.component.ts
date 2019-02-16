import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  public users: any = [];
  public showusers: any = [];
  public filterText: any = "";

  constructor(private router: Router, public http: HttpService) { }

  ngOnInit() {
    let _base = this;
    console.log("On init");
    this.http.getnewusers()
      .then(function (success: any) {
        _base.users = success.result.map((element) => {
          let createdDate = element.createdDate;
          let d = new Date(createdDate);
          element.createdDate = d.toDateString().substring(0, 15);
          return element;
        });
        _base.showusers = _base.users;
      }, function (error) {
        _base.users = [];
      });
  }

  onKey(event: any) {
    let _base = this;
    this.filterText = event.target.value;
    // console.log(this.filterText);
    if (this.filterText == "") {
      this.showusers = this.users;
    } else {
      this.showusers = this.users;
      this.showusers = this.showusers.filter((element) => {
        let name = element.name.toLowerCase().includes(_base.filterText.toLowerCase());
        let email = element.email.toLowerCase().includes(_base.filterText.toLowerCase());
        let address = (element.address) ? element.address.toLowerCase().includes(_base.filterText.toLowerCase()) : false;
        let zip = (element.zipcode) ? element.zipcode.toLowerCase().includes(_base.filterText.toLowerCase()) : false;

        // console.log(name, email, address, zip);
        if (name || email || address || zip) {
          console.log(element);
          return element;
        } else {

        }
      });
      console.log(this.showusers.length);
    }
  }

  details(user) {
    user.updatedDate = "user";
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "user": JSON.stringify(user)
      }
    };
    this.router.navigate(['/home/users'], navigationExtras);
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
