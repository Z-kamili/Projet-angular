import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagenot-found',
  templateUrl: './pagenot-found.component.html',
  styleUrls: ['./pagenot-found.component.css']
})
export class PagenotFoundComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  ajouter(){
this.router.navigate(['followers']);
  }

}
