import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingDemoComponent } from './data-binding-demo.component';

const routes: Routes = [
  {
    path : '',
    component : DataBindingDemoComponent,
  }
]  
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DataBindingDemoRoutingModule { }
