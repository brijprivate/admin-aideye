import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  selected='home';

  constructor(private router: Router) { }

  ngOnInit() {
  }
  selectlink(link){
    this.selected=link  
  } 
  godash(){
    this.router.navigate(['/home']);

  }
  logout(){
    this.router.navigate(['/login']);

  }
}
