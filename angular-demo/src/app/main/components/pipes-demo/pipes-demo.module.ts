import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesDemoComponent } from './pipes-demo.component';
import { PipesDemoRoutingModule } from './pipes-demo-routing.module';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [ 
    PipesDemoComponent
  ],
  imports: [
    CommonModule,
    PipesDemoRoutingModule,
    CoreModule
  ]
})
export class PipesDemoModule { }
