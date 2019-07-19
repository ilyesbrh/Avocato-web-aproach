import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { GraphQlService } from '../Store/graph-ql.service';

@Injectable({
  providedIn: 'root'
})
export class AuthManagerService {

  private token: string;

  constructor(private helper: JwtHelperService, private graphql: GraphQlService) {

    this.token = localStorage.getItem('access_token');
    helper = new JwtHelperService();
  }

  async signupUser(value): Promise<boolean> {

    let token = await this.graphql.register(value);

    return !!token;

  }

  async signinUser(email: string, password: string): Promise<boolean> {

    let token = await this.graphql.login(email, password);

    if (!!token) {
      this.setToken(token);
    }

    return !!token;
  }

  logout() {
    this.token = null;
  }

  getToken() {
    return this.helper.decodeToken(this.token);
  }

  isAuthenticated() {
    return this.token != null && !this.helper.isTokenExpired(this.token);
  }
  setToken(token) {
    localStorage.setItem('access_token', token);
  }
}
