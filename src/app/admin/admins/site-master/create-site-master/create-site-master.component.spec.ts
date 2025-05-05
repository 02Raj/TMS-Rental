import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSiteMasterComponent } from './create-site-master.component';

describe('CreateSiteMasterComponent', () => {
  let component: CreateSiteMasterComponent;
  let fixture: ComponentFixture<CreateSiteMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSiteMasterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSiteMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
