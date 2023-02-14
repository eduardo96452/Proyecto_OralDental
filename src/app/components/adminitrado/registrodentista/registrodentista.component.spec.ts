import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrodentistaComponent } from './registrodentista.component';

describe('RegistrodentistaComponent', () => {
  let component: RegistrodentistaComponent;
  let fixture: ComponentFixture<RegistrodentistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrodentistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrodentistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
