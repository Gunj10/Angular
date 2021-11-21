import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {CdkDragDrop, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatAccordion} from '@angular/material/expansion';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewComponent } from 'src/app/core/dialog-components/dialog-overview/dialog-overview.component';
import { ConfirmationComponent } from 'src/app/core/dialog-components/confirmation/confirmation.component';


export interface Vegetable {
  name: string;
}

@Component({
  selector: 'app-material-demo',
  templateUrl: './material-demo.component.html',
  styleUrls: ['./material-demo.component.scss']
})

export class MaterialDemoComponent implements OnInit {
  
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];
  filteredOptions: Observable<string[]>;

  vegetables: Vegetable[] = [
    {name: 'carrot'},
    {name: 'tomato'},
    {name: 'onion'},
    {name: 'spinach'},
    {name: 'garlic'},
    {name: 'ginger'},
  ];

  animal: string;
  name: string;

  hidden = false;

   @ViewChild(MatAccordion) accordion: MatAccordion;
  
    
  constructor(public dialog: MatDialog)  {}

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  saveForm() {
    const dialogRef = this.dialog.open (ConfirmationComponent, {width : '250px'})

    //send data
    dialogRef.componentInstance.header = "Hello from Material demo"
    dialogRef.componentInstance.content = "Click to save"

    //receive data
    dialogRef.afterClosed().subscribe(res => {
      console.log (res);
    } )
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      width: '250px',
      height: '250px',
      data: {name: this.name, animal: this.animal},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }


  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

 
  drop(event: CdkDragDrop<Vegetable[]>) {
    moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
  }
  
    private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();

      return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }
}
