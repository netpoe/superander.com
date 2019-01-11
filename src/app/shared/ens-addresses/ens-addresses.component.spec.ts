import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsAddressesComponent } from './ens-addresses.component';

describe('EnsAddressesComponent', () => {
  let component: EnsAddressesComponent;
  let fixture: ComponentFixture<EnsAddressesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnsAddressesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnsAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
