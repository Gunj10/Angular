import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/main/models/employee';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  employee : Employee = new Employee();
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
