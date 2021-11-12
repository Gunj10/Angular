import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../main/directive/highlight.directive';
import { RupeePipe } from '../main/pipes/rupee.pipe';

const newComponents_directives_pipes = [
  HighlightDirective,
  RupeePipe
]

@NgModule({
  declarations: [...newComponents_directives_pipes],
  
  imports: [
    CommonModule
  ],

  exports: [...newComponents_directives_pipes]
})
export class CoreModule { }
