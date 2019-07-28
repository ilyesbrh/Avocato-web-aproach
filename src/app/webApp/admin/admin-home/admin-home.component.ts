// tslint:disable : max-line-length
import { Component, OnInit } from '@angular/core';
import { affair } from 'src/app/Store/model';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  flip = false;

  affairs: affair[] = [
    { name: 'affair x', favorite: true, created_at: new Date(2019, 5, 6), description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard ' }
    , { name: 'affair x', favorite: true, created_at: new Date(2019, 5, 6), description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard ' }
    , { name: 'affair x', favorite: true, created_at: new Date(2019, 5, 6), description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard ' }
    , { name: 'affair x', favorite: true, created_at: new Date(2019, 5, 6), description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard ' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
