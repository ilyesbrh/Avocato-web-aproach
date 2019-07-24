import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  showSpinner = false;
  constructor() { }

  ngOnInit() {
  }

  login(formData){
    console.log(formData);
    
  }

}
