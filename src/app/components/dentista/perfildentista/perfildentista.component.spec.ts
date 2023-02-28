import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfildentistaComponent } from './perfildentista.component';

describe('PerfildentistaComponent', () => {
  let component: PerfildentistaComponent;
  let fixture: ComponentFixture<PerfildentistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfildentistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfildentistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
