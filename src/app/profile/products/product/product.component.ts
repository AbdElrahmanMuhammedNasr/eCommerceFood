import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private router: Router) { }

  products = [];

  ngOnInit(): void {
    this.products = [
      {
        id:3,
        image:'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
        name:'Stack',
        price:50,
        categoryType:'meat'
  
      },
      {
        id:4,
        image:'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
        name:'Stack 2',
        price:50,
        categoryType:'meat'
  
      }, {
        id:5,
        image:'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
        name:'Stack',
        price:50,
        categoryType:'meat'
  
      },
      {
        id:6,
        image:'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
        name:'Stack 2',
        price:50,
        categoryType:'meat'
  
      }, {
        id:5,
        image:'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
        name:'Stack',
        price:50,
        categoryType:'meat'
  
      },
      {
        id:6,
        image:'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
        name:'Stack 2',
        price:50,
        categoryType:'meat'
  
      },

    ]
  }

  onGoToDetails(){
    this.router.navigate(['home/productDetails'])
  }

}
