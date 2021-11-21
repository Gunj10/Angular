import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationComponent } from 'src/app/core/dialog-components/confirmation/confirmation.component';

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
  // constructor( private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  changeAllValues() {
    this.isStyleTrue = !this.isStyleTrue;
    alert ('hello')
  }

  // saveForm() {
  //   const dialogRef = this.dialog.open (ConfirmationComponent, {width : '250px'});

  //   //send data
  //   dialogRef.componentInstance.header = "Hello from Data Binding demo"
  //   dialogRef.componentInstance.content = "Click to save"
  //   dialogRef.componentInstance.isOkTrue = false;

  //   //receive data
  //   dialogRef.afterClosed().subscribe(res => {
  //     console.log (res);
  //   } )
  // }

}
