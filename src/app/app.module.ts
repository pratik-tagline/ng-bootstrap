import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { StudentListComponent } from './student/add-student/student-list/student-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    StudentListComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
