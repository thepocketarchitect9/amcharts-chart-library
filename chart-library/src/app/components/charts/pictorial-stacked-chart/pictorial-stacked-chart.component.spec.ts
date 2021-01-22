import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictorialStackedChartComponent } from './pictorial-stacked-chart.component';

describe('PictorialStackedChartComponent', () => {
  let component: PictorialStackedChartComponent;
  let fixture: ComponentFixture<PictorialStackedChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictorialStackedChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PictorialStackedChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
