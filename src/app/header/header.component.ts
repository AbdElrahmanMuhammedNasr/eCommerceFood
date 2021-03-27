import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private route: ActivatedRoute){}

  href: string;

  ngOnInit(): void {
    // console.log(this.route.snapshot.url);


  }
 

  /**************************SEARCH******************************/

  onSearchProduct(event) {
  }



}
