import { Component, OnInit } from '@angular/core';
import { Enumstatus } from 'src/app/core/constants/status.enum';
import { Employee } from '../../models/employee';
import clonedeep from "lodash"

@Component({
  selector: 'app-typescript-demo',
  templateUrl: './typescript-demo.component.html',
  styleUrls: ['./typescript-demo.component.scss']
})
export class TypescriptDemoComponent implements OnInit {

  // syntax- variable : type = value
  varNumber : number = 0;
  varString : string = 'abc'; 
  varBoolean :  boolean;
  status: Enumstatus;

  employee1 : Employee = new Employee ();
  employee2 : Employee = new Employee ();
  employee3: Employee [] = [];
  employees : Employee [] = [
    {
      id: 1,
      name: 'TEST1',
      address: 'Street1',
      phone: 2580,
      company: 'agdv',
      username: 'TEST',
      password: 'test1'
    },
    {
      id: 2,
      name: 'TEST2',
      address: 'Street2',
      phone: 2580,
      company: 'agdv',
      username: 'TEST',
      password: 'test1'
    }
  ];
  
  constructor() { }

  ngOnInit(): void {

    if (this.varNumber = 0){
      // do something
    }

    if (this.status == Enumstatus.Active) {
      // do something
    }
    console.log(
      'Number :' , this.varNumber,
      'String :' , this.varString,
      'Boolean:' , this.varBoolean
    )    
    console.log('employee1 :', this.employee1);
    console.log('employee2 :', this.employee2);
    this.employee1.id = 123;
    this.employee1.name = 'abc';
    this.employee1.address = 'Pune';
    console.log('employee1 :', this.employee1);

    this.employee2 = this.employee1;
    this.employee2.name = 'Gunjan';
    this.employee2.address = 'Mumbai';
    console.log('employee2 :', this.employee2);

    console.log('employees :', this.employees);

    // this.employee3 = this.employees;
    // console.log('employees3 :', this.employee3);
    
    // this.employee3.push(this.employee1);
    // this.employee3[1].name = 'asd'
    // this.employee1 = clonedeep(this.employee1);

    // this.employees.forEach (x=> {
    //   this.employee3.push(x);
    // })

    // this.employee2 = clonedeep(this.employee1);
    // console.log (this.employee2);

    //filter
   
    var result_filter = this.employees.filter (x => x.id = 1)
    if (result_filter && result_filter.length > 0){
      console.log ('result filter = ', result_filter [1])
    }

    //splice
    var new_arr = ['arr1','arr2','arr3','arr4','arr5','arr6','arr7'];
    // var result_splice = new_arr.splice (2, 0, 'new')
    //   console.log ('result splice = ', new_arr, result_splice);
    
    // var result_splice2 = new_arr.splice (2, 4, 'new')
    //   console.log ('result splice2 = ', new_arr, result_splice2);
    
    //slice
    // var result_slice = new_arr.slice (4,7)
    //   console.log ('result_slice = ', new_arr, result_slice);

    //find
    var new_arr_find = [
      {fruit : 'apple', quantity:2},
      {fruit : 'orange', quantity:3},
      {fruit : 'banana', quantity:5},
      {fruit : 'mango', quantity:2},
    ];
    var result_find_fruit = new_arr_find.find (({ fruit }) => fruit === 'mango'  );
      console.log ('result_find_fruit = ', new_arr_find, result_find_fruit);

    var result_find_qty = new_arr_find.find (({ quantity }) => quantity === 5  );
      console.log ('result_find_qty = ', new_arr_find, result_find_qty);

   //filter
    var result_filter_new = new_arr_find.filter (new_arr_find => new_arr_find.fruit.length > 5);
       console.log ('result_filter = ', new_arr_find, result_filter_new);

   //indexof
    var result_indexof = new_arr.indexOf ('arr3', 5)
       console.log ('result_indexof = ', new_arr, result_indexof);       
  }
}
function clonedeep(employee1: Employee): Employee {
  throw new Error('Function not implemented.');
}

