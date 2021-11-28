import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentDemoComponent } from './parent-demo.component';
import { CoreModule } from 'src/app/core/core.module';
import { ParentDemoRoutingModule } from './parent-demo-routing.module';
import { ChildDemoComponent } from './child-demo/child-demo.component';



@NgModule({
  declarations: [
    ParentDemoComponent,
    ChildDemoComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ParentDemoRoutingModule
  ]
})
export class ParentDemoModule { }
