import { Component, OnInit } from '@angular/core';
import { Menu } from '../../models/menu';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss']
})
export class FullLayoutComponent implements OnInit {

  menu: Menu[] = [
    {
      name: 'Directives Demo',
      value: 'directives-demo'
    },
    {
      name: 'Data Binding',
      value: 'data-binding-demo'
    },
    {
      name: 'Material Demo',
      value: 'material-demo'
    },
    {
      name: 'Pipes Demo',
      value: 'pipes-demo'
    },
    {
      name: 'Flex Layout Demo',
      value: 'flex-layout-demo'
    },
    {
      name: 'Typescript Demo',
      value: 'typescript-demo'
    },
    {
      name: 'Parent Demo',
      value: 'parent-demo'
    },
    {
      name: 'Service Demo',
      value: 'service-demo'
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
