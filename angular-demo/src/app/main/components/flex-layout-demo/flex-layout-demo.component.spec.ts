import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexLayoutDemoComponent } from './flex-layout-demo.component';

describe('FlexLayoutDemoComponent', () => {
  let component: FlexLayoutDemoComponent;
  let fixture: ComponentFixture<FlexLayoutDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexLayoutDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexLayoutDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
