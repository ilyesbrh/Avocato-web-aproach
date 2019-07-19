import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ApolloModule, Apollo} from 'apollo-angular';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {onError} from 'apollo-link-error';
import {ApolloLink} from 'apollo-link';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { reducers } from './';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  exports:[
    ApolloModule,
    HttpLinkModule,
    StoreModule,
    StoreDevtoolsModule
  ]
})
export class DataModuleModule { 
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: ApolloLink.from([
        onError(({graphQLErrors, networkError}) => {
          if (graphQLErrors) {
            graphQLErrors.map(({message, locations, path}) =>
              console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
              ),
            );
          }
          if (networkError) { console.log(`[Network error]: ${networkError}`); }
        }),
        httpLink.create({
          uri: 'http://localhost:4000/',
          withCredentials: true,
        }),
      ]),
      cache: new InMemoryCache(),
    });
  }
}
