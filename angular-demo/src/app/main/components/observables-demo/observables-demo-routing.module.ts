import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ObservablesDemoComponent } from './observables-demo.component';

const routes: Routes = [
  {
    path : '',
    component : ObservablesDemoComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ObservablesDemoRoutingModule { }
