import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentData } from 'src/app/shared/model/studentData';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudentComponent implements OnInit {
  title = 'ng-bootstrap';
  registerForm: FormGroup;
  registerFormData: StudentData[] = [];

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      emailId: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[A-Za-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ]),
      ],
      mobile: [
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern('^[0-9]+$'),
        ]),
      ],
      // dob: ['', Validators.compose([Validators.required])],
    });
  }
  get f() {
    return this.registerForm.controls;
  }
  registerFormSubmit() {
    const formData = this.registerForm.value;
    this.registerFormData.push(formData);
    localStorage.setItem('studentData', JSON.stringify(this.registerFormData));
    console.log(this.registerFormData);
  }
}
