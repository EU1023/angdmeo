import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mokuhyo7Component } from './mokuhyo7.component';

describe('Mokuhyo7Component', () => {
  let component: Mokuhyo7Component;
  let fixture: ComponentFixture<Mokuhyo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mokuhyo7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mokuhyo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
