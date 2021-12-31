import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables-demo',
  templateUrl: './observables-demo.component.html',
  styleUrls: ['./observables-demo.component.scss']
})
export class ObservablesDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const obs1 = new Observable ((observer) => {
      if (true) {
        observer.next ('Observer Success');
        observer.next ('It Worked');
        observer.complete ();
      } else {
        observer.error (Error ('Observer error, it is broke'));  
      }
    });
    
    obs1.subscribe(
      success => console.log(success),
      error => console.log(error)
    );
  }
}
