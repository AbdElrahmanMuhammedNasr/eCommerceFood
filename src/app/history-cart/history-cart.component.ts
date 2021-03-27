import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-cart',
  templateUrl: './history-cart.component.html',
  styleUrls: ['./history-cart.component.css']
})
export class HistoryCartComponent implements OnInit {

  constructor() { }

  carts = [];
  totalPrice = 0;
  ngOnInit(): void {

    this.carts = [
      {
      image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
      name: 'Stack',
      time: '3:40 Am',
      price: 20,
      chef: 'Tamer'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
      name: 'Stack',
      time: '3:40 am',
      price: 20,
      chef: 'Tamer'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
      name: 'Stack',
      time: '3:40 am',
      price: 20,
      chef: 'Tamer'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
      name: 'Stack',
      time: '2:40 pm',
      price: 30,
      chef: 'Tamer'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
      name: 'Stack',
      time: '3:40 Am',
      price: 20,
      chef: 'Tamer'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
      name: 'Stack',
      time: '3:40 Am',
      price: 40,
      chef: 'Tamer'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
      name: 'Stack',
      time: '3:40 Am',
      price: 20,
      chef: 'Tamer'
    },    {
        image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
        name: 'Stack',
        time: '3:40 am',
        price: 20,
        chef: 'Tamer'
      },
      {
        image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
        name: 'Stack',
        time: '3:40 am',
        price: 20,
        chef: 'Tamer'
      },
      {
        image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
        name: 'Stack',
        time: '2:40 pm',
        price: 30,
        chef: 'Tamer'
      },
      {
        image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
        name: 'Stack',
        time: '3:40 Am',
        price: 20,
        chef: 'Tamer'
      },
      {
        image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
        name: 'Stack',
        time: '3:40 Am',
        price: 40,
        chef: 'Tamer'
      },
      {
        image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
        name: 'Stack',
        time: '3:40 Am',
        price: 20,
        chef: 'Tamer'
      },    {
        image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
        name: 'Stack',
        time: '3:40 am',
        price: 20,
        chef: 'Tamer'
      },
      {
        image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
        name: 'Stack',
        time: '3:40 am',
        price: 20,
        chef: 'Tamer'
      },
      {
        image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
        name: 'Stack',
        time: '2:40 pm',
        price: 30,
        chef: 'Tamer'
      },
      {
        image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
        name: 'Stack',
        time: '3:40 Am',
        price: 20,
        chef: 'Tamer'
      },
      {
        image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
        name: 'Stack',
        time: '3:40 Am',
        price: 40,
        chef: 'Tamer'
      },
      {
        image: 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg',
        name: 'Stack',
        time: '3:40 Am',
        price: 20,
        chef: 'Tamer'
      }
  ];

    this.carts.map(e => {
    this.totalPrice += e.price;
    });
  }

}
