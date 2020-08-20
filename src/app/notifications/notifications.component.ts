import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor() { }

  nots = []
  ngOnInit(): void {
   this.nots = [2,1,2,3,45,5,9,8,4,1,1];

  }

}
