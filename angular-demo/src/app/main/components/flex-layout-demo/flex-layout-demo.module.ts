import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutDemoComponent } from './flex-layout-demo.component';
import { FlexLayoutDemoRoutingModule } from './flex-layout-demo-routing.module';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    FlexLayoutDemoComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutDemoRoutingModule,
    CoreModule
  ]
})
export class FlexLayoutDemoModule { }
