import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourokuComponent } from './touroku.component';

describe('TourokuComponent', () => {
  let component: TourokuComponent;
  let fixture: ComponentFixture<TourokuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourokuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourokuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
