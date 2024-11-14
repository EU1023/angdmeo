import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mokuhyo4Component } from './mokuhyo4.component';

describe('Mokuhyo4Component', () => {
  let component: Mokuhyo4Component;
  let fixture: ComponentFixture<Mokuhyo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mokuhyo4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mokuhyo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
