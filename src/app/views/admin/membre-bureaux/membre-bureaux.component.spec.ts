import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembreBureauxComponent } from './membre-bureaux.component';

describe('MembreBureauxComponent', () => {
  let component: MembreBureauxComponent;
  let fixture: ComponentFixture<MembreBureauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembreBureauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembreBureauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
