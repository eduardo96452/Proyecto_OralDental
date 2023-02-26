import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogindentistaComponent } from './logindentista.component';

describe('LogindentistaComponent', () => {
  let component: LogindentistaComponent;
  let fixture: ComponentFixture<LogindentistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogindentistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogindentistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
