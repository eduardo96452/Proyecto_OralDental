import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginpacienteComponent } from './loginpaciente.component';

describe('LoginpacienteComponent', () => {
  let component: LoginpacienteComponent;
  let fixture: ComponentFixture<LoginpacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginpacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginpacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
