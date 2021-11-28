import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutDemoComponent } from './flex-layout-demo.component';

const routes: Routes = [
  {
    path : '',
    component : FlexLayoutDemoComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FlexLayoutDemoRoutingModule { }
