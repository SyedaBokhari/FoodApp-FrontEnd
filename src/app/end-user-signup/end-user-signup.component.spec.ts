import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndUserSignupComponent } from './end-user-signup.component';

describe('EndUserSignupComponent', () => {
  let component: EndUserSignupComponent;
  let fixture: ComponentFixture<EndUserSignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EndUserSignupComponent]
    });
    fixture = TestBed.createComponent(EndUserSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
