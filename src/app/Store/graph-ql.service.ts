import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
@Injectable({
  providedIn: 'root'
})
export class GraphQlService {

  registerQuery = gql`
    mutation($name:String!,$email:String!,$password:String!){
      register(
        name: $name
        email: $email
        password: $password
      ){token}
    }
  `;
  me = gql`
    mutation($email:String!,$password:String!){
      me(
        email: $email
        password: $password
      ){token}
    }
  `;
  constructor(private apollo: Apollo) { }
  register(values) {
    return this.apollo.mutate({
      mutation: this.registerQuery,
      variables: { name: values.firstName + ' ' + values.lastName, email: values.email, password: values.password }
    }).toPromise();
  }
  login(email, password) {
    return this.apollo.mutate({
      mutation: this.me,
      variables: { email, password }
    })
  }
}
