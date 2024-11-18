import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiyousyaUiComponent } from './siyousya-ui.component';

describe('SiyousyaUiComponent', () => {
  let component: SiyousyaUiComponent;
  let fixture: ComponentFixture<SiyousyaUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiyousyaUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiyousyaUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
