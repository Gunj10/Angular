import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises-demo',
  templateUrl: './promises-demo.component.html',
  styleUrls: ['./promises-demo.component.scss']
})
export class PromisesDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const promise1 = new Promise ((resolve , reject) => {
      var res = this.getRecord (1,2);  
      if (res) {
        resolve (res);
      } else {
        reject (' data not received');
      }
    })
  }

  getRecord(x: any, y:any) {
    if (x && y) {
      return x + y;
    } else {
      return undefined
    }
  }
}

