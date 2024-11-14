import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mokuhyo8Component } from './mokuhyo8.component';

describe('Mokuhyo8Component', () => {
  let component: Mokuhyo8Component;
  let fixture: ComponentFixture<Mokuhyo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mokuhyo8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mokuhyo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
