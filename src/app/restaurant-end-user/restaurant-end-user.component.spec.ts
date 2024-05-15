import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantEndUserComponent } from './restaurant-end-user.component';

describe('RestaurantEndUserComponent', () => {
  let component: RestaurantEndUserComponent;
  let fixture: ComponentFixture<RestaurantEndUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantEndUserComponent]
    });
    fixture = TestBed.createComponent(RestaurantEndUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
