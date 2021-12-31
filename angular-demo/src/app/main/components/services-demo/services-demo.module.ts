import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesDemoComponent } from './services-demo.component';
import { ServiceDemoRoutingModule } from './service-demo-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ServicesDemoComponent
  ],
  imports: [
    CommonModule,
    ServiceDemoRoutingModule,
    FormsModule, 
    ReactiveFormsModule,   
    CoreModule 
  ]
})
export class ServicesDemoModule { }
