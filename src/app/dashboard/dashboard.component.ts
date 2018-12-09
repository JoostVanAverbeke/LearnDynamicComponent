import { Component, OnInit} from '@angular/core';
import { DashboardCard} from '../shared/models/dashboard.card';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboardCards: DashboardCard[] = [
    new DashboardCard('overview', 1),
    new DashboardCard('overview', 9),
    new DashboardCard('hello', 12),
    new DashboardCard('burndown', 4),
    new DashboardCard('burndown', 7)
  ];

  ngOnInit() {
  }

}
