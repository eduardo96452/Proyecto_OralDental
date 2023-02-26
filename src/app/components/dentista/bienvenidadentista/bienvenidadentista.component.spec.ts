import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienvenidadentistaComponent } from './bienvenidadentista.component';

describe('BienvenidadentistaComponent', () => {
  let component: BienvenidadentistaComponent;
  let fixture: ComponentFixture<BienvenidadentistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BienvenidadentistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BienvenidadentistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
