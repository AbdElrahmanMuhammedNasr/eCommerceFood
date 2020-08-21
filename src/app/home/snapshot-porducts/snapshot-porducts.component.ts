import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-snapshot-porducts',
  templateUrl: './snapshot-porducts.component.html',
  styleUrls: ['./snapshot-porducts.component.css']
})
export class SnapshotPorductsComponent implements OnInit {

  constructor(private router:Router) { }

  snap =[]
  ngOnInit(): void {
    this.snap=[1,1,1,1,1,1,1,1,1,1,1,1]
  }

  onGoToDetails(){
    this.router.navigate(['/home/productDetails'])
  }
}

