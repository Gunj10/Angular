import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.scss']
})
export class PipesDemoComponent implements OnInit {
  todaysdate = new Date();
  numArray : number[] = [1,2,7,4,8,56,12,33]; 
  newNumArray : number; 
  pi: number = 3.14159265359;
  
  constructor() { }
  

  ngOnInit(): void {
  }

  onclick() {
    // addValue() {
      if (this.newNumArray) {
        this.numArray.push (this.newNumArray);
        this.newNumArray = undefined;
        console.log (this. numArray)
      }
    // }
  }
  
}
