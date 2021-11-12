import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.scss']
})
export class PipesDemoComponent implements OnInit {
  todaysdate = new Date();
  numArray : number[] = [1,2,3,4]; 
  newNumArray : number; 
  
  constructor() { }
  

  ngOnInit(): void {
  }

  addValue() {
    if (this.newNumArray) {
      this.numArray.push (this.newNumArray);
      this.newNumArray = undefined;
      console.log (this. numArray)
    }
  }
}
