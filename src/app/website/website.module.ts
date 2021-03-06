import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JwtModule } from '@auth0/angular-jwt';

import { WebsiteRoutingModule } from './website-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { MaterialComponentsModule } from '../UiLibrary/material-components/material-components.module';
import { LoadingComponent } from './loading/loading.component';

import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [LandingPageComponent, LoginComponent, RegisterComponent, 
    HomeComponent, AboutUsComponent, ContactComponent, HelpComponent, LoadingComponent],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    MaterialComponentsModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: getToken,
        whitelistedDomains: ['*://localhost:4200/*'],
        blacklistedRoutes: []
      }
    }),
  ],
  exports: [JwtModule]
})
export class WebsiteModule { }

export function getToken() {
  return localStorage.getItem('access_token');
}