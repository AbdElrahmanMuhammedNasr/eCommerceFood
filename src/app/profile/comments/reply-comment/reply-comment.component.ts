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
    this.replayComment =[
      {
        image:'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
        name:'Samer',
        time :'2020/6/10  10:30 am',
        replayComment:'soil is a mixture of  '
      },
    ]
  }

}
