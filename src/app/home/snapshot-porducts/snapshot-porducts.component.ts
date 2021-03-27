import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-snapshot-porducts',
  templateUrl: './snapshot-porducts.component.html',
  styleUrls: ['./snapshot-porducts.component.css']
})
export class SnapshotPorductsComponent implements OnInit {

  constructor(private router: Router) { }

  productShapshots = [];
  ngOnInit(): void {
    this.productShapshots = [
    {
      id: 1,
      image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
      name: 'Stack',
      price: 50,
      discount: false,
      categoryType: 'meat'

    },
    {
      id: 2,
      image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
      name: 'Stack 2',
      price: 50,
      discount: 10,
      categoryType: 'meat'

    }, {
      id: 3,
      image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
      name: 'Stack',
      price: 50,
      discount: false,
      categoryType: 'meat'

    },
    {
      id: 4,
      image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
      name: 'Stack 2',
      price: 50,
      discount: 10,
      categoryType: 'meat'

    }, {
      id: 5,
      image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
      name: 'Stack',
      price: 50,
      discount: false,
      categoryType: 'meat'

    },
    {
      id: 6,
      image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
      name: 'Stack 2',
      price: 50,
      discount: 10,
      categoryType: 'meat'

    }, {
      id: 5,
      image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
      name: 'Stack',
      price: 50,
      discount: false,
      categoryType: 'meat'

    },
    {
      id: 6,
      image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
      name: 'Stack 2',
      price: 50,
      discount: 10,
      categoryType: 'meat'

    },
    {
      id: 1,
      image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
      name: 'Stack',
      price: 50,
      discount: false,
      categoryType: 'meat'

    },
    {
      id: 2,
      image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
      name: 'Stack 2',
      price: 50,
      discount: 10,
      categoryType: 'meat'

    }, {
      id: 3,
      image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
      name: 'Stack',
      price: 50,
      discount: false,
      categoryType: 'meat'

    },
    {
      id: 4,
      image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
      name: 'Stack 2',
      price: 50,
      discount: 10,
      categoryType: 'meat'

    }, {
      id: 5,
      image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
      name: 'Stack',
      price: 50,
      discount: false,
      categoryType: 'meat'

    },
    {
      id: 6,
      image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
      name: 'Stack 2',
      price: 50,
      discount: 10,
      categoryType: 'meat'

    }, {
      id: 5,
      image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
      name: 'Stack',
      price: 50,
      discount: false,
      categoryType: 'meat'

    },
    {
      id: 6,
      image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
      name: 'Stack 2',
      price: 50,
      discount: 10,
      categoryType: 'meat'

    },
    {
      id: 1,
      image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
      name: 'Stack',
      price: 50,
      discount: false,
      categoryType: 'meat'

    },
    {
      id: 2,
      image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
      name: 'Stack 2',
      price: 50,
      discount: 10,
      categoryType: 'meat'

    }, {
      id: 3,
      image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
      name: 'Stack',
      price: 50,
      discount: false,
      categoryType: 'meat'

    },
    {
      id: 4,
      image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
      name: 'Stack 2',
      price: 50,
      discount: 10,
      categoryType: 'meat'

    }, {
      id: 5,
      image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
      name: 'Stack',
      price: 50,
      discount: false,
      categoryType: 'meat'

    },
    {
      id: 6,
      image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
      name: 'Stack 2',
      price: 50,
      discount: 10,
      categoryType: 'meat'

    }, {
      id: 5,
      image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
      name: 'Stack',
      price: 50,
      discount: false,
      categoryType: 'meat'

    },
    {
      id: 6,
      image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
      name: 'Stack 2',
      price: 50,
      discount: 10,
      categoryType: 'meat'

    },
  ];
  }

  onGoToDetails(): void{
    this.router.navigate(['/home/productDetails']);
  }
}

