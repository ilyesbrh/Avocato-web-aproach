import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminEmptyComponent } from './admin-empty/admin-empty.component';
import { ErrorPageComponent } from './error-page/error-page.component';


const routes: Routes = [
  {
    path: '', component: BoardComponent, children: [
      { path: '', component: AdminHomeComponent },
      { path: 'empty', component: AdminEmptyComponent },
      { path: 'error', component: ErrorPageComponent },
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
