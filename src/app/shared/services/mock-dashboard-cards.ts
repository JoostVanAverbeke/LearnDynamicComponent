import { DashboardCard } from '../models/dashboard.card';
import { FunctionParameter } from '../models/function.parameter';

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

dashboardCard1.addFunctionParameter(functionParameter1);
dashboardCard2.addFunctionParameter(functionParameter2);
dashboardCard3.addFunctionParameter(functionParameter3);
dashboardCard4.addFunctionParameter(functionParameter4);
dashboardCard5.addFunctionParameter(functionParameter5);
dashboardCard6.addFunctionParameter(functionParameter6);
dashboardCard6.addFunctionParameter(functionParameter7);


export const DASHBOARD_CARDS: DashboardCard[] = [
  dashboardCard1,
  dashboardCard2,
  dashboardCard3,
  dashboardCard4,
  dashboardCard5,
  dashboardCard6
];
