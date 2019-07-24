import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  @HostBinding('class') classes = 'd-flex justify-content-center align-items-center';
  constructor() { }

  ngOnInit() {
  }

}
