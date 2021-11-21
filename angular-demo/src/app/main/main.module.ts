import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { TypescriptDemoComponent } from './components/typescript-demo/typescript-demo.component';

@NgModule({
  declarations: [
    // DataBindingDemoComponent,
    TypescriptDemoComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
