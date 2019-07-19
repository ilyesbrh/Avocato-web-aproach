import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthManagerService } from './website/auth-manager.service';
import { DataModuleModule } from './Store/data-module.module';
import { GraphQlService } from './Store/graph-ql.service';
import { WebsiteModule } from './website/website.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentsModule } from './UiLibrary/material-components/material-components.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataModuleModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
    WebsiteModule,

  ],
  providers: [GraphQlService, AuthManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
