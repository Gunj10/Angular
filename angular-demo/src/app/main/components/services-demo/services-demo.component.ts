import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-services-demo',
  templateUrl: './services-demo.component.html',
  styleUrls: ['./services-demo.component.scss']
})
export class ServicesDemoComponent implements OnInit {

  employees: Employee[] = [];
  employee: Employee = new Employee();
  dataSource: any;
  submitted = false;
  update = false;
  displayedColumns: string[] = ['id','name', 'address', 'phone', 'company', 'username', 'function'];

  constructor( private toastr: ToastrService, private employeeService: EmployeeService,private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.showResults();
  }

  showResults() {
    this.toastr.success('Hello world!', 'Toastr fun!');
    this.toastr.show ('Hellow world!!!! Gunjan');
    
    this.employeeService.getEmployeeRecords().subscribe(res => {
      this.employees = res;
      this.dataSource = this.employees;
    });
  }
  registerForm = this.formBuilder.group({
    //  
    name: new FormControl(this.employee.name, [
      Validators.required,
      Validators.minLength(4)
    ]),
    address: new FormControl(this.employee.address),
    company: new FormControl(this.employee.company),
    phone: new FormControl(this.employee.phone),
    username: new FormControl(this.employee.username)
  })
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      // display form values on success
      //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
      this.employee = this.registerForm.value;
      this.addEmployee();      
  }

  showEmployeeRecords() {
    this.employeeService.getEmployeeRecords().subscribe(res => {
      this.employees = res;
      this.dataSource = res;
    });
  }

  resetEmployee(){
    this.submitted = false;
    this.update = false;
    this.registerForm.reset();
  }


  deleteEmployee(id: number){
    this.employeeService.deleteEmployeeRecords(id).subscribe(res => {
      this.toastr.success('Record Deleted!', 'ID ' + id + ' deleted successfully');
      this.showEmployeeRecords();
      this.resetEmployee();
    })
  }

  addEmployee(){
    this.employeeService.addEmployeeRecords(this.employee).subscribe(res => {
      this.toastr.success('Record Added successfully');
      this.showEmployeeRecords();
      this.resetEmployee();
    })
  }

  updateEmployee(employee: any){
    // var id = this.employee.id;
    // this.employee = this.registerForm.value;
    // this.employee.id = id;
    // this.employeeService.getEmployeeRecords().subscribe(res => {
    //   this.employees = res;      
    //   this.employee = this.employees.find(e => e.id === id);
    //   // this.loadEmployee(this.employee);
    //   this.update = true;      
    // });\
    this.update = true;
    this.loadEmployee(employee);
    this.employee = employee;
  }

  loadEmployee(employee: any) {
    // this.employeeService.getEmployeeRecords().subscribe(res => {
    //   this.employees = res;      
    //   var employee = this.employees.find(e => e.id == id);
      this.registerForm = this.formBuilder.group({
        name: new FormControl(employee.name),
        address: new FormControl(employee.address),
        phone: new FormControl(employee.phone),
        company: new FormControl(employee.company),
        username: new FormControl(employee.username)
      })    
    // });    
  }

  updateEmployeeRecordWithId() {
    var id = this.employee.id;
    this.employee = this.registerForm.value;
    this.employee.id = id;      
    console.log(this.employee);
    this.employeeService.updateEmployeeRecords(this.employee).subscribe(res => {      
      this.toastr.success('Record with id ' + res.id + ' updated Successfully');
      this.showEmployeeRecords();
      this.resetEmployee();
    });
  }
}
