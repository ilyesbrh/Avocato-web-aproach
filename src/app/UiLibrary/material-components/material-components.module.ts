import { NgModule } from '@angular/core';

import {
  MatCheckboxModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatListModule,
  MatButtonToggleModule,
  MatRippleModule
} from '@angular/material';



const MODULES = [MatCheckboxModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatListModule,
  MatButtonToggleModule,
  MatRippleModule
]
@NgModule({
  declarations: [],
  imports: [...MODULES],
  exports: [...MODULES]
})
export class MaterialComponentsModule { }
