import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoprincipalComponent } from './contactoprincipal.component';

describe('ContactoprincipalComponent', () => {
  let component: ContactoprincipalComponent;
  let fixture: ComponentFixture<ContactoprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoprincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
