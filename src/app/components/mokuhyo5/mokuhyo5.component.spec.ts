import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mokuhyo5Component } from './mokuhyo5.component';

describe('Mokuhyo5Component', () => {
  let component: Mokuhyo5Component;
  let fixture: ComponentFixture<Mokuhyo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mokuhyo5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mokuhyo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
