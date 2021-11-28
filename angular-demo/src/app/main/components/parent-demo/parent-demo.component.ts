import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent-demo',
  templateUrl: './parent-demo.component.html',
  styleUrls: ['./parent-demo.component.scss']
})
export class ParentDemoComponent implements OnInit, OnChanges, DoCheck, 
       AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { 
    console.log ('Hello from Parent const');
    
   }
  
  ngOnInit(): void {
    console.log ('Hello from Parent Oninit')
  }

  ngOnDestroy(): void {
    console.log ('Hello from Parent ngOnDestroy')
  }
  ngAfterViewChecked(): void {
    console.log ('Hello from Parent ngAfterViewChecked')
  }
  ngAfterViewInit(): void {
    console.log ('Hello from Parent ngAfterViewInit')
  }
  ngAfterContentChecked(): void {
    console.log ('Hello from Parent ngAfterContentChecked')
  }
  ngAfterContentInit(): void {
    console.log ('Hello from Parent ngAfterContentInit')
  }
  ngDoCheck(): void {
    console.log ('Hello from Parent ngDoCheck')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log ('Hello from Parent ngOnChanges')
  }

}
