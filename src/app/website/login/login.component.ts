import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showSpinner = false;

  constructor(private router: Router) {}

  ngOnInit() {
  }

  login(formData) {
    this.router.navigate(['/admin']);
  }

}
