import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mokuhyo1Component } from './mokuhyo1.component';

describe('Mokuhyo1Component', () => {
  let component: Mokuhyo1Component;
  let fixture: ComponentFixture<Mokuhyo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mokuhyo1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mokuhyo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
