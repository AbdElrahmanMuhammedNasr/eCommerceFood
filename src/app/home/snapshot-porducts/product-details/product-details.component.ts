import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }

  singleProduct = {
    image: '',
    name:'',
    price:0,
    discount: 0,
    categoryType:'',
    location:'',
    ingregients:[],
    overview:[]
  }

  ngOnInit(): void {
    this.singleProduct = {
      image:'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
      name: 'Stack',
      price: 100,
      discount: 20,
      categoryType: 'meat',
      location: 'Tanta',
      ingregients: ['meat','sault','water','coca'],
      overview:['verg good so far',' not fatty for body','verg good so far',' not fatty for body',],

    }
    
  }

}
