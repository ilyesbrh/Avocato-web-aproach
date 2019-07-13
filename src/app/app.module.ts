import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ArchiveModule } from './archive/archive.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { AlarmModule } from './alarm/alarm.module';
import { ParametersModule } from './parameters/parameters.module';
import { NotesModule } from './notes/notes.module';
import { ContactsModule } from './contacts/contacts.module';
import { FundModule } from './fund/fund.module';
import { ListeningSessionModule } from './listening-session/listening-session.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
