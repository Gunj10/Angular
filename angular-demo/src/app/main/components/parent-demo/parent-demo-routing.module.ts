import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ParentDemoComponent } from './parent-demo.component';

const routes: Routes = [
  {
    path : '',
    component : ParentDemoComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ParentDemoRoutingModule { }
