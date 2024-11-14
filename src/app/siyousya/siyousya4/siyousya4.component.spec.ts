import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Siyousya4Component } from './siyousya4.component';

describe('Siyousya4Component', () => {
  let component: Siyousya4Component;
  let fixture: ComponentFixture<Siyousya4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Siyousya4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Siyousya4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
