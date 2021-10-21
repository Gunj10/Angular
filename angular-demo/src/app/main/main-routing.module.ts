import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BindingParser } from '@angular/compiler/src/template_parser/binding_parser';
import { DataBindingDemoComponent } from './components/data-binding-demo/data-binding-demo.component';
import { DirectivesDemoComponent } from './components/directives-demo/directives-demo.component';
import { FlexLayoutDemoComponent } from './components/flex-layout-demo/flex-layout-demo.component';
import { PipesDemoComponent } from './components/pipes-demo/pipes-demo.component';
import { MaterialDemoComponent } from './components/material-demo/material-demo.component';

const routes: Routes = [
  {
    path : 'data-binding-demo',
    component : DataBindingDemoComponent,
  },
  {
    path : 'directives-demo',
    component : DirectivesDemoComponent,
  },
  {
    path : 'flex-layout-demo',
    component : FlexLayoutDemoComponent,
  },
  {
    path : 'pipes-demo',
    component : PipesDemoComponent,
  },
  {
    path : 'material-demo',
    component : MaterialDemoComponent,
  }
]  
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MainRoutingModule { }
