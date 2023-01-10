import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoprealComponent } from './popreal.component';

describe('PoprealComponent', () => {
  let component: PoprealComponent;
  let fixture: ComponentFixture<PoprealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoprealComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoprealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
