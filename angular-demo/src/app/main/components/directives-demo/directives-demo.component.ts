import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrls: ['./directives-demo.component.scss']
})
export class DirectivesDemoComponent implements OnInit {

  constructor() { }

  isactive : Boolean = true;

  items : string[] = ['apple','orange','banana','mango'];
  
  numbers = 4;

  loggedIn : Boolean = true;
  welcome : Boolean = false;

  ngOnInit(): void {
  }

  isActivemethod() {
    return true;
  }
}
