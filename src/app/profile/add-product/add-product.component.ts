import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor() { }

  category =[];

  ngOnInit(): void {
    this.category = ['cool drinks','hot drinks','smoothie','sport drinks']
  }
  

  onAddNewProduct(){

  }

  showPreviewImage(event){

  }

}
