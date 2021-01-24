import { Component, Inject, NgZone, OnInit, PLATFORM_ID } from '@angular/core';

//Imports for AMCHARTS
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'semi-circle-pie-chart',
  templateUrl: './semi-circle-pie-chart.component.html',
  styleUrls: ['./semi-circle-pie-chart.component.scss']
})
export class SemiCirclePieChartComponent implements OnInit {

  private chart: am4charts.XYChart;

  constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone) { }

  ngOnInit(): void {
  }

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }
  
  ngAfterViewInit() {
    // Chart code goes in here
    this.browserOnly(() => {

      /* ************************************************ */
      /*                                                  */
      /*                 Chart details                    */
      /*                                                  */
      /* ************************************************ */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart = am4core.create("chartdiv", am4charts.PieChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = [
      {
        country: "Lithuania",
        value: 10,
        "color": am4core.color("#F87F49")
      },
      {
        country: "Czech Republic",
        value: 1,
        "color": am4core.color("#537EC5")
      },
      {
        country: "Ireland",
        value: 2,
        "color": am4core.color("#7F51AC")
      },
      {
        country: "Germany",
        value: 1,
        "color": am4core.color("#F9D138")
      },
      {
        country: "Australia",
        value: 2,
        "color": am4core.color("#A73284")
      },
      {
        country: "Austria",
        value: 1,
        color: am4core.color("#F05A56")
      }
    ];

    chart.radius = am4core.percent(70);
    chart.innerRadius = am4core.percent(40);
    chart.startAngle = 180;
    chart.endAngle = 360;  

    var series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "value";
    series.dataFields.category = "country";
    series.slices.template.propertyFields.fill = "color";

    /* series.slices.template.cornerRadius = 5;
    series.slices.template.innerCornerRadius = 5; */
    series.slices.template.draggable = true;
    series.slices.template.inert = true;
    series.alignLabels = false;

    series.hiddenState.properties.startAngle = 90;
    series.hiddenState.properties.endAngle = 90;

    series.ticks.template.disabled = true;
    series.alignLabels = false;
    series.labels.template.text = "{value.value}";
    series.labels.template.radius = am4core.percent(-25);
    series.labels.template.fill = am4core.color("white");

    /* series.patterns = new am4core.PatternSet(); */

    /* series.labels.template.adapter.add("radius", function(radius, target) {
      if (target.dataItem && (target.dataItem.values.value.percent < 10)) {
        return 0;
      }
      return radius;
    });

    series.labels.template.adapter.add("fill", function(color, target) {
      if (target.dataItem && (target.dataItem.values.value.percent < 10)) {
        return am4core.color("#000");
      }
      return color;
    }); */

    chart.legend = new am4charts.Legend();
    chart.legend.useDefaultMarker = true;
    var marker = chart.legend.markers.template.children.getIndex(0);
    // marker.cornerRadius(12, 12, 12, 12);
    marker.strokeWidth = 2;
    marker.strokeOpacity = 1;
    marker.stroke = am4core.color("#ccc");




    chart.legend = new am4charts.Legend();

    /* chart.legend.labels.template.text = "{value.value}"; */
    chart.legend.valueLabels.template.text = "{value.value}";

    });
  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

}
