import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearcitasComponent } from './crearcitas.component';

describe('CrearcitasComponent', () => {
  let component: CrearcitasComponent;
  let fixture: ComponentFixture<CrearcitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearcitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearcitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
