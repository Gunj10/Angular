import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullLayoutComponent } from './main/components/full-layout/full-layout.component';
import { BlankLayoutComponent } from './main/components/blank-layout/blank-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    BlankLayoutComponent
  ],  
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
