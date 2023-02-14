import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiedepaginaprincipalComponent } from './piedepaginaprincipal.component';

describe('PiedepaginaprincipalComponent', () => {
  let component: PiedepaginaprincipalComponent;
  let fixture: ComponentFixture<PiedepaginaprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiedepaginaprincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiedepaginaprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
