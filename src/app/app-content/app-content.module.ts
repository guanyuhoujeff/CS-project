import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppContentRoutingModule } from './app-content-routing.module';
import { AppContentComponent } from './app-content.component';
import { HeaderComponent } from './header/header.component';
import { SubContentComponent } from './sub-content/sub-content.component';
import { StudentComponent } from './sub-content/student/student.component';
import { ClassComponent } from './sub-content/class/class.component';
import { CreateStudentComponent } from './drawer/create-student/create-student.component';
import { CreateGroupComponent } from './drawer/create-group/create-group.component';
import { CreateClassComponent } from './drawer/create-class/create-class.component';
import { StudentDrawerComponent } from './drawer/student-drawer/student-drawer.component';
import { InfoComponent } from './drawer/student-drawer/student-drawer-child/info/info.component';
import { ContactComponent } from './drawer/student-drawer/student-drawer-child/contact/contact.component';
import { LectureComponent } from './drawer/class-drawer/class-drawer-child/lecture/lecture.component';
import { FeeComponent } from './drawer/class-drawer/class-drawer-child/fee/fee.component';

@NgModule({
  declarations: [AppContentComponent, HeaderComponent, SubContentComponent, StudentComponent, ClassComponent, CreateStudentComponent, CreateGroupComponent, CreateClassComponent, StudentDrawerComponent, InfoComponent, ContactComponent, LectureComponent, FeeComponent],
  imports: [
    CommonModule,
    AppContentRoutingModule
  ]
})
export class AppContentModule { }
