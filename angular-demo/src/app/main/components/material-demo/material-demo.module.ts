import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { MaterialDemoRoutingModule } from './material-demo-routing.module';
import { MaterialDemoComponent } from './material-demo.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MaterialDemoComponent
  ],
  imports: [
    CommonModule,
    MaterialDemoRoutingModule,
    CoreModule,
    FormsModule
  ]
})
export class MaterialDemoModule { }
