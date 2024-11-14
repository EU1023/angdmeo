import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Siyousya1Component } from './siyousya1.component';

describe('Siyousya1Component', () => {
  let component: Siyousya1Component;
  let fixture: ComponentFixture<Siyousya1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Siyousya1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Siyousya1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
