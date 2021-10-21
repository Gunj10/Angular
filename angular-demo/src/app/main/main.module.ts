import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingDemoComponent } from './components/data-binding-demo/data-binding-demo.component';
import { MainRoutingModule } from './main-routing.module';


@NgModule({
  declarations: [
    DataBindingDemoComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
