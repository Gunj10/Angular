import { SlicePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pureSort'
})
export class PureSortPipe implements PipeTransform {

  transform(value: any[], ...args: unknown[]): unknown {
    return value.slice().sort((a:number, b:number) => a - b) ;
  }

}
