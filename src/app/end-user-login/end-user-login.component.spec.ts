import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndUserLoginComponent } from './end-user-login.component';

describe('EndUserLoginComponent', () => {
  let component: EndUserLoginComponent;
  let fixture: ComponentFixture<EndUserLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EndUserLoginComponent]
    });
    fixture = TestBed.createComponent(EndUserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
