import { AppContentComponent } from './app-content.component';
import { AppComponent } from './../app.component';
import { SubContentComponent } from './sub-content/sub-content.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './sub-content/student/student.component';
import { ClassComponent } from './sub-content/class/class.component';

const routes: Routes = [
  {
    path: "",
    component: AppContentComponent,
    children: [
      { path: "", component: StudentComponent },
      { path: "", redirectTo: "student" },
      { path: "student", component: StudentComponent },
      { path: "class", component: ClassComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppContentRoutingModule { }
