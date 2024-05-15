import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishAdminComponent } from './dish-admin.component';

describe('DishAdminComponent', () => {
  let component: DishAdminComponent;
  let fixture: ComponentFixture<DishAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DishAdminComponent]
    });
    fixture = TestBed.createComponent(DishAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
