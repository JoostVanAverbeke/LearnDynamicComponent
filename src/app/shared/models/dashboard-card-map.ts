import { BurndownComponent } from '../../burndown/burndown.component';
import { OverviewComponent } from '../../overview/overview.component';
import { DynamicTitleComponent } from '../../dynamic-title/dynamic-title.component';

/**
 * Created by joost on 06-01-19.
 */

export class DashboardCardMap {
  private static _instance: DashboardCardMap;
  private _map: Map<string, any>;


  static getInstance(): DashboardCardMap {
    if (!DashboardCardMap._instance) {
      DashboardCardMap._instance = new DashboardCardMap();
    }
    return DashboardCardMap._instance;
  }

  private constructor() {
    this._map = new Map<string, any>();
    this.addDashboardCardComponent('burndown', BurndownComponent);
    this.addDashboardCardComponent('overview', OverviewComponent);
    this.addDashboardCardComponent('dynamic-title', DynamicTitleComponent);
  }

  private addDashboardCardComponent(key: string, component: any): void {
    this._map.set(key, component);
  }


  public getDashboardCardComponent(key: string): any {
    return this._map.get(key);
  }
}
