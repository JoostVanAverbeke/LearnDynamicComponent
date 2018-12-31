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

    const functionParameters1: FunctionParameter[] = [
      functionParameter1
    ];
    const functionParameters2: FunctionParameter[] = [
      functionParameter2
    ];
    const functionParameters3: FunctionParameter[] = [
      functionParameter3
    ];
    const functionParameters4: FunctionParameter[] = [
      functionParameter4
    ];
    const functionParameters5: FunctionParameter[] = [
      functionParameter5
    ];
    const functionParameters6: FunctionParameter[] = [
      functionParameter6
    ];

    this.dashboardCards = [
        new DashboardCard('overview', functionParameters1),
        new DashboardCard('overview', functionParameters2),
        new DashboardCard('hello', functionParameters3),
        new DashboardCard('burndown', functionParameters4),
        new DashboardCard('burndown', functionParameters5),
        new DashboardCard('dynamic-title', functionParameters6)
    ];
  }

}
