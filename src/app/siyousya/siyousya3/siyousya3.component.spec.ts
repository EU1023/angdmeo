import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Siyousya3Component } from './siyousya3.component';

describe('Siyousya3Component', () => {
  let component: Siyousya3Component;
  let fixture: ComponentFixture<Siyousya3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Siyousya3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Siyousya3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
