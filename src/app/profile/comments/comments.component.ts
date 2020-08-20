import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor() { }
  comments =[]

  ngOnInit(): void {
    this.comments = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  }

}
