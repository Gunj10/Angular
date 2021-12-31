import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/main/models/employee';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  employee : Employee = new Employee();

  ngOnInit(): void {
  }

  onSubmit() {
    // Assume authentication is done and we have received the token
    localStorage.clear();
    localStorage.setItem('access-token', 'testtoken');
    localStorage.setItem('user-role', 'admin');

  }
}
