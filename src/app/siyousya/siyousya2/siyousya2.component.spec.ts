import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Siyousya2Component } from './siyousya2.component';

describe('Siyousya2Component', () => {
  let component: Siyousya2Component;
  let fixture: ComponentFixture<Siyousya2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Siyousya2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Siyousya2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
