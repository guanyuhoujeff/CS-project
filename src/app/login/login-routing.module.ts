import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
    // children: [
    //   { path: "", redirectTo: "app-content/student" },
      // { path: "student", component: StudentComponent },
      // { path: "class", component: ClassComponent }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
