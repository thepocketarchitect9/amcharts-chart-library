import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoLevelPieChartComponent } from './two-level-pie-chart.component';

describe('TwoLevelPieChartComponent', () => {
  let component: TwoLevelPieChartComponent;
  let fixture: ComponentFixture<TwoLevelPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoLevelPieChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoLevelPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
