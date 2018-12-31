import { Component, OnInit} from '@angular/core';
import { DashboardCard} from '../shared/models/dashboard.card';
import { FunctionParameter} from '../shared/models/function.parameter';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboardCards: DashboardCard[] = [];

  ngOnInit() {
    const functionParameter1: FunctionParameter = { parameter: 'board', value: 2};
    const functionParameter2: FunctionParameter = { parameter: 'board', value: 9};
    const functionParameter3: FunctionParameter = { parameter: 'board', value: 12};
    const functionParameter4: FunctionParameter = { parameter: 'board', value: 4};
    const functionParameter5: FunctionParameter = { parameter: 'board', value: 7};
    const functionParameter6: FunctionParameter = { parameter: 'title', value: 'hello dynamic angular'};
    const functionParameter7: FunctionParameter = { parameter: 'second', value: 'this is my second function parameter'};

    const dashboardCard1 =  new DashboardCard('overview');
    const dashboardCard2 =  new DashboardCard('overview');
    const dashboardCard3 =  new DashboardCard('hello');
    const dashboardCard4 =  new DashboardCard('burndown');
    const dashboardCard5 =  new DashboardCard('burndown');
    const dashboardCard6 =  new DashboardCard('dynamic-title');

    dashboardCard1.addFuntionParameter(functionParameter1);
    dashboardCard2.addFuntionParameter(functionParameter2);
    dashboardCard3.addFuntionParameter(functionParameter3);
    dashboardCard4.addFuntionParameter(functionParameter4);
    dashboardCard5.addFuntionParameter(functionParameter5);
    dashboardCard6.addFuntionParameter(functionParameter6);
    dashboardCard6.addFuntionParameter(functionParameter7);

    this.dashboardCards = [
      dashboardCard1,
      dashboardCard2,
      dashboardCard3,
      dashboardCard4,
      dashboardCard5,
      dashboardCard6
    ];
  }

}
