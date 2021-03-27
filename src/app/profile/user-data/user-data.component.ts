import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  constructor() { }

  posts =[];
  userData = {about:'', name:'', job:'',location:'',socialMedia:[]};
  process = {products:0, clients:0,rating:0};
  ngOnInit(): void {

    this.process ={
        products:20,
        clients:30,
        rating:8
    }


    this.userData ={
      about:' oil is a mixture of soil oil is a mixture of soil oil is a mixture of soil oil is a mixture of soil',
      name:'AbdElrahman Muhammed',
      job: 'Chef',
      location:'Tanta . Cairo',
      socialMedia:[
        'www.facebook.com', 
        'www.youtube.com', 
      ]
    }


    this.posts=[
        {
          image:'https://cdn.pixabay.com/photo/2015/11/20/10/36/nymph-1052750__340.jpg',
          name:'Asmaa',
          time:'12:30 am',
          post: ' oil is a mixture of soil that is the ideal plant-growing medium.  It is actually a combination soil,   normally equal parts of clay,'
        },
        {
          image:'https://cdn.pixabay.com/photo/2015/11/20/10/36/nymph-1052750__340.jpg',
          name:'Asmaa',
          time:'12:30 am',
          post: ' oil is a mixture of soil that is the ideal plant-growing medium.  It is actually a combination soil,It is actually a combination soil, It is actually a combination soil,    normally equal parts of clay,'
        },
        {
          image:'https://cdn.pixabay.com/photo/2015/11/20/10/36/nymph-1052750__340.jpg',
          name:'Asmaa',
          time:'12:30 am',
          post: ' oil is a mixture of soil that is the ideal plant-growing medium.  It is actually a combination soil, It is actually a combination soil, It is actually a combination soil,   normally equal parts of clay,'
        },
        {
          image:'https://cdn.pixabay.com/photo/2015/11/20/10/36/nymph-1052750__340.jpg',
          name:'Asmaa',
          time:'12:30 am',
          post: ' oil is a mixture of soil that is the ideal plant-growing medium.  It is actually a combination soil,   normally equal parts of clay,'
        },

    ]
  }

}
