import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAcceptDeclineComponent } from './request-accept-decline.component';

describe('RequestAcceptDeclineComponent', () => {
  let component: RequestAcceptDeclineComponent;
  let fixture: ComponentFixture<RequestAcceptDeclineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestAcceptDeclineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestAcceptDeclineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
