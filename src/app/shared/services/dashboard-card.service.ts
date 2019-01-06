import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DashboardCard } from '../models/dashboard.card';
import { DASHBOARD_CARDS } from './mock-dashboard-cards';

@Injectable({
  providedIn: 'root'
})
export class DashboardCardService {

  constructor() { }

  getDashboardCards(): Observable<DashboardCard[]> {
    return of(DASHBOARD_CARDS);
  }
}
