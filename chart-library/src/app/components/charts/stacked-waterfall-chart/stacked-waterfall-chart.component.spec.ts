import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedWaterfallChartComponent } from './stacked-waterfall-chart.component';

describe('StackedWaterfallChartComponent', () => {
  let component: StackedWaterfallChartComponent;
  let fixture: ComponentFixture<StackedWaterfallChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackedWaterfallChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedWaterfallChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
