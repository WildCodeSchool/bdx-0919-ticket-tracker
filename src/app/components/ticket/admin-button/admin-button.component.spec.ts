import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminButtonComponent } from './admin-button.component';

describe('AdminButtonComponent', () => {
  let component: AdminButtonComponent;
  let fixture: ComponentFixture<AdminButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
