import { Component, OnInit} from '@angular/core';
import { DashboardCard} from '../shared/models/dashboard.card';
import { FunctionParameter} from '../shared/models/function.parameter';
import {DashboardCardService} from "../shared/services/dashboard-card.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboardCards: DashboardCard[];

  constructor(private dashboardCardService: DashboardCardService) { }

  ngOnInit() {
    this.getDashboardCards();
  }

  private getDashboardCards(): void {
    this.dashboardCardService.getDashboardCards()
      .subscribe(dashboardCards => this.dashboardCards = dashboardCards);
  }
}
