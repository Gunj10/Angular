import { NgModule } from '@angular/core';
import { MyLibraryComponent } from './my-library.component';
import { EuroPipe } from './pipe/euro.pipe';



@NgModule({
  declarations: [
    MyLibraryComponent,
    EuroPipe
  ],
  imports: [
  ],
  exports: [
    MyLibraryComponent,
    EuroPipe
  ]
})
export class MyLibraryModule { }
