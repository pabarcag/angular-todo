import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolmeChildTwoComponent } from './holme-child-two.component';

describe('HolmeChildTwoComponent', () => {
  let component: HolmeChildTwoComponent;
  let fixture: ComponentFixture<HolmeChildTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolmeChildTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolmeChildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
