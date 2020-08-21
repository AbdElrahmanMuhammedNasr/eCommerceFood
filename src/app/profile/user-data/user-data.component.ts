import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  constructor() { }

  posts =[];
  ngOnInit(): void {
    this.posts=[1,1,1,1,1,11,1,1,]
  }

}
