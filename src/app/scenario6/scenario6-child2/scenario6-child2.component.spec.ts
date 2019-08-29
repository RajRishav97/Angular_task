import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario6Child2Component } from './scenario6-child2.component';

describe('Scenario6Child2Component', () => {
  let component: Scenario6Child2Component;
  let fixture: ComponentFixture<Scenario6Child2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario6Child2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario6Child2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
