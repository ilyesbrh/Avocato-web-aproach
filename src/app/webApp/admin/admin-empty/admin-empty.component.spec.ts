import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmptyComponent } from './admin-empty.component';

describe('AdminEmptyComponent', () => {
  let component: AdminEmptyComponent;
  let fixture: ComponentFixture<AdminEmptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEmptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
