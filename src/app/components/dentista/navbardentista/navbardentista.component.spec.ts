import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbardentistaComponent } from './navbardentista.component';

describe('NavbardentistaComponent', () => {
  let component: NavbardentistaComponent;
  let fixture: ComponentFixture<NavbardentistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbardentistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbardentistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
