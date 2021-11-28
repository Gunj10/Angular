import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-demo',
  templateUrl: './child-demo.component.html',
  styleUrls: ['./child-demo.component.scss']
})
export class ChildDemoComponent implements OnInit, OnChanges, DoCheck, 
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { 
    console.log ('-----------Hello from Child const');
   }
  
  ngOnInit(): void {
    console.log ('-----------Hello from Child Oninit')
  }

  ngOnDestroy(): void {
    console.log ('-----------Hello from Child ngOnDestroy')
  }
  ngAfterViewChecked(): void {
    console.log ('-----------Hello from Child ngAfterViewChecked')
  }
  ngAfterViewInit(): void {
    console.log ('-----------Hello from Child ngAfterViewInit')
  }
  ngAfterContentChecked(): void {
    console.log ('-----------Hello from Child ngAfterContentChecked')
  }
  ngAfterContentInit(): void {
    console.log ('-----------Hello from Child ngAfterContentInit')
  }
  ngDoCheck(): void {
    console.log ('-----------Hello from Child ngDoCheck')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log ('-----------Hello from Child ngOnChanges')
  }

}
