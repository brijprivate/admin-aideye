import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  selected = 'home';

  usercount: number = 0;
  subscount: number = 0;

  constructor(private router: Router, public http: HttpService) {
    let _base = this;
    this.http.usercount.subscribe((count) => {
      _base.usercount = count;
    });
    this.http.subscount.subscribe((count) => {
      _base.subscount = count;
    });
  }

  ngOnInit() {
  }


  selectlink(link) {
    this.selected = link
  }

  godash() {
    this.router.navigate(['/home']);
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
