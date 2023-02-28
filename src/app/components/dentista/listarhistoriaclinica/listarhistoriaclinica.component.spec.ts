import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarhistoriaclinicaComponent } from './listarhistoriaclinica.component';

describe('ListarhistoriaclinicaComponent', () => {
  let component: ListarhistoriaclinicaComponent;
  let fixture: ComponentFixture<ListarhistoriaclinicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarhistoriaclinicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarhistoriaclinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
