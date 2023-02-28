import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearhistoriaclinicaComponent } from './crearhistoriaclinica.component';

describe('CrearhistoriaclinicaComponent', () => {
  let component: CrearhistoriaclinicaComponent;
  let fixture: ComponentFixture<CrearhistoriaclinicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearhistoriaclinicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearhistoriaclinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
