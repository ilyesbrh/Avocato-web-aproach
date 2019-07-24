import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { BoardComponent } from './board/board.component';
import { MaterialComponentsModule } from 'src/app/UiLibrary/material-components/material-components.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminEmptyComponent } from './admin-empty/admin-empty.component';
import { ErrorPageComponent } from './error-page/error-page.component';


@NgModule({
  declarations: [BoardComponent, AdminHomeComponent, AdminEmptyComponent, ErrorPageComponent],
  imports: [
    CommonModule,
    MaterialComponentsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
