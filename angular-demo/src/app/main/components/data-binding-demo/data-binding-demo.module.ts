import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingDemoComponent } from './data-binding-demo.component';
import { DataBindingDemoRoutingModule } from './data-binding-demo-routing.module';
import { FormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    DataBindingDemoComponent
  ],
  imports: [
    CommonModule,
    DataBindingDemoRoutingModule,
    FormsModule
  ]
})
export class DataBindingDemoModule { }
