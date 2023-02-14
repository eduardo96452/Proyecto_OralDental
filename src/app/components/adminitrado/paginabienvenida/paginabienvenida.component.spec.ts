import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginabienvenidaComponent } from './paginabienvenida.component';

describe('PaginabienvenidaComponent', () => {
  let component: PaginabienvenidaComponent;
  let fixture: ComponentFixture<PaginabienvenidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginabienvenidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginabienvenidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
