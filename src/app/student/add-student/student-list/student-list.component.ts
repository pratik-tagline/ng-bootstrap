import { Component, OnInit } from '@angular/core';
import { StudentData } from 'src/app/shared/model/studentData';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit {
  studentData: any = [];
  constructor() {}

  ngOnInit(): void {
    this.studentData = JSON.parse(localStorage.getItem('studentData'));
    console.log(this.studentData);
  }
}
