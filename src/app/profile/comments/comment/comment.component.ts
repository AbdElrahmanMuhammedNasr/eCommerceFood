import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor() { }
  comments =[]
  displayReply = false;

  ngOnInit(): void {
    this.comments =[
      {
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_qQNX1BpIFTRUuFWP-HrDAQv_sdia2y8EffQHxArvPT4FlIw&s',
        name:'Samer',
        time :'2020/6/10  10:30 am',
        comment:'soil is a mixture of soil that is the ideal plant-growing medium. '
      },
      {
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_qQNX1BpIFTRUuFWP-HrDAQv_sdia2y8EffQHxArvPT4FlIw&s',
        name:'Tamer Ali',
        time :'2020/6/10  10:30 am',
        comment:'soil is a mixture of soil that is the ideal plant-growing medium. '
      },
      {
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_qQNX1BpIFTRUuFWP-HrDAQv_sdia2y8EffQHxArvPT4FlIw&s',
        name:'Tamer Ali',
        time :'2020/6/10  10:30 am',
        comment:'soil is a mixture of soil that is the ideal plant-growing medium. '
      },
    ]
  }

}
