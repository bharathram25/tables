// import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/shared/service/common.service';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor(private services : CommonService) { }

  employeeRegistrationForm!: FormGroup;

  designation = [
    { id: 1, name: 'Team lead' },
    { id: 2, name: 'Senior Software engineer' },
    { id: 3, name: 'Software Engineer' },
    { id: 4, name: 'Marketing' },
    { id: 5, name: 'Business Analyst' }
  ];
  role = [
    { id: 1, name: 'Admin' },
    { id: 2, name: 'Super Admin' },
    { id: 3, name: 'Employee' },
  ];
  todaydate = new Date();

  ngOnInit() {
    this.employeeRegistrationForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required, Validators.pattern('^[ a-zA-Z ]+$')]),
      lastName: new FormControl(null, Validators.maxLength(2)),
      eMail: new FormControl(null, [Validators.email, Validators.required]),
      alternateEmail: new FormControl(null,[ Validators.required,Validators.email]),
      dateOfBirth: new FormControl(null, Validators.required),
      dateOfJoin: new FormControl(null, Validators.required),
      designation: new FormControl(null, Validators.required),
      role: new FormControl(null, Validators.required)
    })
  }

  onSubmit() {
    if(this.employeeRegistrationForm.valid){
      this.services.snack('Sucess','accept','close');
    }else if(this.employeeRegistrationForm.dirty){
      this.services.snack('warning','partial','close');
    }else{
      this.services.snack('Failed to Submit','reject','close' );
    }
  }
}
