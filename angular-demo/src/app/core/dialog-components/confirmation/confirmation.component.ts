import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  header: string;
  content: any;
  isOkTrue: boolean = true;
  
  constructor( private dialogRef: MatDialogRef<ConfirmationComponent> ) { }

  ngOnInit(): void {
  }

  close() {
    if (this.isOkTrue){
      this.dialogRef.close ('Ok');
    }      
    else{
      this.dialogRef.close ('Not OK');
    }  
  }
}
