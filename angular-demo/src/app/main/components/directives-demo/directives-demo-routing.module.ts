import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesDemoComponent } from './directives-demo.component';

const routes: Routes = [
  {
    path : '',
    component : DirectivesDemoComponent,
  }
]  

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DirectivesDemoRoutingModule { }
