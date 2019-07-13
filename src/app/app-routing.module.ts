import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebsiteModule } from './authentication/website/website.module';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '1', component: AppComponent,
    loadChildren: () => WebsiteModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
