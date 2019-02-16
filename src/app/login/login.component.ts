import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;

  constructor(private router: Router, private http: HttpService) { }

  ngOnInit() {
  }

  submit() {
    console.log("Submit");
    let _base = this;
    this.http.login({
      username: this.username,
      password: this.password
    }).then(function (success: any) {
      console.log(success);
      if (success.error == false) {
        localStorage.setItem("user", success.user);
        _base.router.navigate(['/home']);
      } else {
        alert(success.message);
      }
    }, function (error) {
      console.log(error);
      console.log("Please try again");
    });
  }
}
