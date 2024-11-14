import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mokuhyo6Component } from './mokuhyo6.component';

describe('Mokuhyo6Component', () => {
  let component: Mokuhyo6Component;
  let fixture: ComponentFixture<Mokuhyo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mokuhyo6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mokuhyo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
