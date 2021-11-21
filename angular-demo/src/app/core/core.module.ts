import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../main/directive/highlight.directive';
import { RupeePipe } from '../main/pipes/rupee.pipe';
import { PureSortPipe } from '../main/pipes/pure-sort.pipe';
import { ImpureSortPipe } from '../main/pipes/impure-sort.pipe';
import { MaterialModule } from './module/material.module';
import { DialogOverviewComponent } from './dialog-components/dialog-overview/dialog-overview.component';
import { FormsModule } from '@angular/forms';
import { ConfirmationComponent } from './dialog-components/confirmation/confirmation.component';

const newComponents_directives_pipes = [
  HighlightDirective,
  RupeePipe,
  PureSortPipe,
  ImpureSortPipe,
  DialogOverviewComponent,
  ConfirmationComponent
]

const modules = [
  CommonModule,
  MaterialModule,
  FormsModule
]

@NgModule({
  declarations: [...newComponents_directives_pipes ],
  
  imports: [
    ...modules
  ],

  entryComponents: [DialogOverviewComponent, ConfirmationComponent],  //Dynamic components dialogbox

  exports: [...newComponents_directives_pipes, ...modules]
})
export class CoreModule { }
