import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartContractDetailsComponent } from './smart-contract-details.component';

describe('SmartContractDetailsComponent', () => {
  let component: SmartContractDetailsComponent;
  let fixture: ComponentFixture<SmartContractDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartContractDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartContractDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
