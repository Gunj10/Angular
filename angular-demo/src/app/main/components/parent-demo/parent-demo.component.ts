import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, OnChanges, OnDestroy, OnInit, Query, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { ChildDemoComponent } from './child-demo/child-demo.component';

@Component({
  selector: 'app-parent-demo',
  templateUrl: './parent-demo.component.html',
  styleUrls: ['./parent-demo.component.scss']
})
export class ParentDemoComponent implements OnInit, OnChanges, DoCheck, 
       AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @ViewChild ('viewChildRef', { static:false }) vRef: ElementRef;
  @ViewChild ('viewChildRef', { static:true }) vRef2: ElementRef;

  @ViewChild ('viewChildDemoRef', { static:true }) vDemo: ElementRef;
  @ViewChild (ChildDemoComponent, { static:false}) compRef: ChildDemoComponent;

  @ViewChildren (ChildDemoComponent) multipleRef: QueryList <any>;

  parentVariable: number = 20;
  outputVariable: number = 30;


  constructor() { 
    console.log ('Hello from Parent const');
    
   }
  
  ngOnInit(): void {
    console.log ('Hello from Parent Oninit')
  }

  updateFromChild(event:any){
    this.outputVariable = event;
  }

  ngOnDestroy(): void {
    console.log ('Hello from Parent ngOnDestroy')
  }
  ngAfterViewChecked(): void {
    console.log ('Hello from Parent ngAfterViewChecked')
  }
  ngAfterViewInit(): void {
    console.log ('Hello from Parent ngAfterViewInit')
    this.vRef2.nativeElement.style.color = 'blue';


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
