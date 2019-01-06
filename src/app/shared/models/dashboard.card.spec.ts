import { DashboardCard } from './dashboard.card';
/**
 * Created by joost on 05-01-19.
 */

describe('Dashboard Card', () => {
  let burndownDashboardCard: DashboardCard;

  beforeEach(() => {
    burndownDashboardCard = new DashboardCard('burndown');
  });

  it('should create', () => {
    const dashboardCard = new DashboardCard('overview');
  });

  it('has a public componentType member', () => {
    expect(burndownDashboardCard.componentType).toEqual('burndown');
  });

  it('has a public functionParameters member', () => {
    expect(burndownDashboardCard.functionParameters).not.toBeFalsy();
  });

  it('lets you add a function parameter to the dashboard card instance', () => {
    burndownDashboardCard.addFunctionParameter({parameter: 'parameter1', value: 'value1'});
    expect(burndownDashboardCard.numberOfFunctionParameters()).toEqual(1);
  });

  it('returns the number of function parameters of the dashboard card', () => {
    burndownDashboardCard.addFunctionParameter({parameter: 'parameter1', value: 'value1'});
    burndownDashboardCard.addFunctionParameter({parameter: 'parameter2', value: 10});
    expect(burndownDashboardCard.numberOfFunctionParameters()).toEqual(2);
  });
});
