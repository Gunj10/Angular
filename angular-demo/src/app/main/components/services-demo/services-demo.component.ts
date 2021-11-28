import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-services-demo',
  templateUrl: './services-demo.component.html',
  styleUrls: ['./services-demo.component.scss']
})
export class ServicesDemoComponent implements OnInit {

  constructor( private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.toastr.success('Hello world!', 'Toastr fun!');
    this.toastr.show ('Hellow world!!!! Gunjan')
  }

}
