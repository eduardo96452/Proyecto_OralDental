import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginadentistaComponent } from './paginadentista.component';

describe('PaginadentistaComponent', () => {
  let component: PaginadentistaComponent;
  let fixture: ComponentFixture<PaginadentistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginadentistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginadentistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
