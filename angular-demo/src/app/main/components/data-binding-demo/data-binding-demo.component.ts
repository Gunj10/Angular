import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-demo',
  templateUrl: './data-binding-demo.component.html',
  styleUrls: ['./data-binding-demo.component.scss']
})
export class DataBindingDemoComponent implements OnInit {

  oneWayDataBinding : string = 'One Way Data Binding';
  twoWayDataBinding : string = 'Two Way Data Binding';
  typeBinding1 = 'text';
  typeBinding2 = 'number';
  typeBinding3 = 'File';
  isStyleTrue : Boolean = true;
  isClassValue : string = 'success';

  constructor() { }

  ngOnInit(): void {
  }

  changeAllValues() {
    this.isStyleTrue = !this.isStyleTrue;
    alert ('hello')
  }

}
