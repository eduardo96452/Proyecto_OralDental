import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarpacienteComponent } from './listarpaciente.component';

describe('ListarpacienteComponent', () => {
  let component: ListarpacienteComponent;
  let fixture: ComponentFixture<ListarpacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarpacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarpacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
