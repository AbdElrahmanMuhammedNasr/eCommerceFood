import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private router:Router) { }
  category =[];

  ngOnInit(): void {
    this.category=[
      [      
       
        {categoryImage:"https://cdn.pixabay.com/photo/2014/09/07/22/25/champagne-438448__340.jpg" ,categoryName: "Cool Drinks" , mainCategory:"Drinks" },
        {categoryImage:"https://cdn.pixabay.com/photo/2017/01/12/14/22/coffee-1974841_960_720.jpg" ,categoryName: "Hot Drinks" , mainCategory:"Drinks"},
        {categoryImage:"https://cdn.pixabay.com/photo/2018/03/13/11/39/fruit-3222313__340.jpg" ,categoryName: "Smoothie" , mainCategory:"Sweet" },
        {categoryImage:"https://cdn.pixabay.com/photo/2019/09/23/16/10/manipulation-4499010_960_720.jpg" ,categoryName: "Sports Drinks" , mainCategory:"Sweet" },
  
      
      ],
      [
        {categoryImage:"https://cdn.pixabay.com/photo/2016/06/30/18/49/sardines-1489626__340.jpg" ,categoryName: "Sea Food", mainCategory:"Food" },
        {categoryImage:"https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg" ,categoryName: "Meat" , mainCategory:"Food"},
        {categoryImage:"https://cdn.pixabay.com/photo/2019/04/07/17/20/chicken-4110208_960_720.jpg" ,categoryName: "Chicken" , mainCategory:"Food"},
        {categoryImage:"https://cdn.pixabay.com/photo/2018/04/13/17/12/vegetable-skewer-3317055__340.jpg" ,categoryName: "Vegan", mainCategory:"Food" },
     
     ],
     [
      {categoryImage:"https://cdn.pixabay.com/photo/2017/05/23/22/36/vegetables-2338824__340.jpg" ,categoryName: "Vegetables", mainCategory:"Salad" },
      {categoryImage:"https://cdn.pixabay.com/photo/2017/01/31/09/30/raspberry-2023404__340.jpg" ,categoryName: "Fruits" , mainCategory:"Salad"},
    ],
    [
        {categoryImage:"https://cdn.pixabay.com/photo/2016/12/26/16/09/bowl-1932375__340.jpg" ,categoryName: "Ice cream" , mainCategory:"Sweet"},
        {categoryImage:"https://cdn.pixabay.com/photo/2015/03/26/09/39/cupcakes-690040__340.jpg" ,categoryName: "Cake" , mainCategory:"Sweet"}, 
  
     ]
     


    ]
  }
  onGoToSnapShot(){
    this.router.navigate(['/home/snapshot'])
  }

}
