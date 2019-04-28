import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/app-content', pathMatch: 'full' },
  {
    path: "login",
    loadChildren: "./login/login.module#LoginModule"
  },
  {
    path: "app-content",
    loadChildren: "./app-content/app-content.module#AppContentModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
