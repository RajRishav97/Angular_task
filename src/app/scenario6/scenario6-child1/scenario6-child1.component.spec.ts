import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario6Child1Component } from './scenario6-child1.component';

describe('Scenario6Child1Component', () => {
  let component: Scenario6Child1Component;
  let fixture: ComponentFixture<Scenario6Child1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario6Child1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario6Child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
