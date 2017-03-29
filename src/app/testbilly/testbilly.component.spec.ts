import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestbillyComponent } from './testbilly.component';

describe('TestbillyComponent', () => {
  let component: TestbillyComponent;
  let fixture: ComponentFixture<TestbillyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestbillyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestbillyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
