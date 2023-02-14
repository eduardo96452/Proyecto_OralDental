import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadodentistaComponent } from './listadodentista.component';

describe('ListadodentistaComponent', () => {
  let component: ListadodentistaComponent;
  let fixture: ComponentFixture<ListadodentistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadodentistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadodentistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
