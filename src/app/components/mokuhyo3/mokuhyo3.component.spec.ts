import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mokuhyo3Component } from './mokuhyo3.component';

describe('Mokuhyo3Component', () => {
  let component: Mokuhyo3Component;
  let fixture: ComponentFixture<Mokuhyo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mokuhyo3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mokuhyo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
