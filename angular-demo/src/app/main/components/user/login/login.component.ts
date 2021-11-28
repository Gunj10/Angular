import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/main/models/employee';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  employee : Employee = new Employee();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
