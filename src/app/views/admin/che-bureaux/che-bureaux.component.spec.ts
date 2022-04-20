import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheBureauxComponent } from './che-bureaux.component';

describe('CheBureauxComponent', () => {
  let component: CheBureauxComponent;
  let fixture: ComponentFixture<CheBureauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheBureauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheBureauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
