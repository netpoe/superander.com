import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacksComponent } from './facks.component';

describe('FacksComponent', () => {
  let component: FacksComponent;
  let fixture: ComponentFixture<FacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
