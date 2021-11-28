import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesDemoComponent } from './services-demo.component';
import { ServiceDemoRoutingModule } from './service-demo-routing.module';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    ServicesDemoComponent
  ],
  imports: [
    CommonModule,
    ServiceDemoRoutingModule,
    CoreModule
  ]
})
export class ServicesDemoModule { }
