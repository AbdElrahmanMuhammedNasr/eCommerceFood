import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private router:Router) { }
  cat =[];

  ngOnInit(): void {
    this.cat=[1,1,1,1,1,1,1,1,1,1,1]
  }
  onGoToSnapShot(){
    this.router.navigate(['/home/snapshot'])
  }

}
