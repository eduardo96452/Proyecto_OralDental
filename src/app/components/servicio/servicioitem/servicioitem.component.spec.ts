import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioitemComponent } from './servicioitem.component';

describe('ServicioitemComponent', () => {
  let component: ServicioitemComponent;
  let fixture: ComponentFixture<ServicioitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
