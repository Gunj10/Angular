import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impureSort',
  pure: false
})
export class ImpureSortPipe implements PipeTransform {

  transform(value: any[], ...args: unknown[]): unknown {
    return value.slice().sort((a:number, b:number) => a - b) ;
  }

}
