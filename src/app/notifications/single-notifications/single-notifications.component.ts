import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-notifications',
  templateUrl: './single-notifications.component.html',
  styleUrls: ['./single-notifications.component.css']
})
export class SingleNotificationsComponent implements OnInit {

  constructor() { }

  notifications = [];

  ngOnInit(): void {

    this.notifications = [
      {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_qQNX1BpIFTRUuFWP-HrDAQv_sdia2y8EffQHxArvPT4FlIw&',
        name: 'Mostafa ali',
        order: 'Fish',
        time: '4:20 am',
        timeout: '4:40 am',
        type: 'order'
      },
      {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_qQNX1BpIFTRUuFWP-HrDAQv_sdia2y8EffQHxArvPT4FlIw&',
        name: 'Hassan ali',
        response: 'Accept fish Order',
        time: '4:20 am',
        timeout: '4:40 am',
        type: 'response'
      },

      {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_qQNX1BpIFTRUuFWP-HrDAQv_sdia2y8EffQHxArvPT4FlIw&',
        name: 'Mostafa ali',
        order: 'Fish',
        time: '4:20 am',
        timeout: '4:40 am',
        type: 'order'
      },
      {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_qQNX1BpIFTRUuFWP-HrDAQv_sdia2y8EffQHxArvPT4FlIw&',
        name: 'Hassan ali',
        response: 'Accept fish Order',
        time: '4:20 am',
        timeout: '4:40 am',
        type: 'response'
      },
      {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_qQNX1BpIFTRUuFWP-HrDAQv_sdia2y8EffQHxArvPT4FlIw&',
        name: 'Mostafa ali',
        order: 'Fish',
        time: '4:20 am',
        timeout: '4:40 am',
        type: 'timeOut'
      },
      {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_qQNX1BpIFTRUuFWP-HrDAQv_sdia2y8EffQHxArvPT4FlIw&',
        name: 'Mostafa ali',
        order: 'Fish',
        time: '4:20 am',
        timeout: '4:40 am',
        type: 'order'
      },
      {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_qQNX1BpIFTRUuFWP-HrDAQv_sdia2y8EffQHxArvPT4FlIw&',
        name: 'Hassan ali',
        response: 'Accept fish Order',
        time: '4:20 am',
        timeout: '4:40 am',
        type: 'response'
      },

      {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_qQNX1BpIFTRUuFWP-HrDAQv_sdia2y8EffQHxArvPT4FlIw&',
        name: 'Mostafa ali',
        order: 'Fish',
        time: '4:20 am',
        timeout: '4:40 am',
        type: 'order'
      },
      {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_qQNX1BpIFTRUuFWP-HrDAQv_sdia2y8EffQHxArvPT4FlIw&',
        name: 'Hassan ali',
        response: 'Accept fish Order',
        time: '4:20 am',
        timeout: '4:40 am',
        type: 'response'
      },




    ];
  }

}
