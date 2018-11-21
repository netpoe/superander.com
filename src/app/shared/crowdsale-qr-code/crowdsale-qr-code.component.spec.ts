import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrowdsaleQrCodeComponent } from './crowdsale-qr-code.component';

describe('CrowdsaleQrCodeComponent', () => {
  let component: CrowdsaleQrCodeComponent;
  let fixture: ComponentFixture<CrowdsaleQrCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrowdsaleQrCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrowdsaleQrCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
