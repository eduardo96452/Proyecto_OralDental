import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciototalComponent } from './serviciototal.component';

describe('ServiciototalComponent', () => {
  let component: ServiciototalComponent;
  let fixture: ComponentFixture<ServiciototalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciototalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciototalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
