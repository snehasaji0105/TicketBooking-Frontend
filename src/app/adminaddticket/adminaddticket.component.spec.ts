import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddticketComponent } from './adminaddticket.component';

describe('AdminaddticketComponent', () => {
  let component: AdminaddticketComponent;
  let fixture: ComponentFixture<AdminaddticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminaddticketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminaddticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
