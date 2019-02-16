import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sublist',
  templateUrl: './sublist.component.html',
  styleUrls: ['./sublist.component.css']
})
export class SublistComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
details(){
  
  this.router.navigate(['/home/users']);
}
}
