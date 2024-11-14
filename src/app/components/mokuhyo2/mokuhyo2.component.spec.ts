import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mokuhyo2Component } from './mokuhyo2.component';

describe('Mokuhyo2Component', () => {
  let component: Mokuhyo2Component;
  let fixture: ComponentFixture<Mokuhyo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mokuhyo2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mokuhyo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
