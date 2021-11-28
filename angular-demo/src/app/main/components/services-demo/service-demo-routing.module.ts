import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ServicesDemoComponent } from './services-demo.component';

const routes: Routes = [
  {
    path : '',
    component : ServicesDemoComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ServiceDemoRoutingModule { }
