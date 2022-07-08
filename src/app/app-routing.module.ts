import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { StudentListComponent } from './student/add-student/student-list/student-list.component';

const routes: Routes = [
  { path: 'add-student', component: AddStudentComponent },
  { path: 'student-list', component: StudentListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
