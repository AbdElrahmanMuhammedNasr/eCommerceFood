import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reply-comment',
  templateUrl: './reply-comment.component.html',
  styleUrls: ['./reply-comment.component.css']
})
export class ReplyCommentComponent implements OnInit {

  constructor() { }
  replayComment =[];

  ngOnInit(): void {
    this.replayComment =[1,1,1]
  }

}
