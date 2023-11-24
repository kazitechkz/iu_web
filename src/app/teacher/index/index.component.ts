import {Component, ViewChild} from '@angular/core';
import {ImageHelper} from "../../core/helpers/image.helper";
import {ColorConstants} from "../../core/constants/color.constants";
import {RoutesName} from "../../core/constants/routes.constants";
import {StrHelper} from "../../core/helpers/str.helper";
import {BaseChartDirective} from "ng2-charts";
import {ChartConfiguration, ChartData, ChartType} from "chart.js";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 0,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      { data: [  ], label: '',backgroundColor:"#4DC591" },
    ],
  };
  protected readonly ImageHelper = ImageHelper;
  protected readonly ColorConstants = ColorConstants;
  protected readonly RoutesName = RoutesName;
  protected readonly StrHelper = StrHelper;
  protected readonly parseInt = parseInt;
  protected readonly String = String;
}
