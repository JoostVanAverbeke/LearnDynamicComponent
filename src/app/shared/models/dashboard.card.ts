import { FunctionParameter } from './function.parameter';
/**
 * Created by joost on 09-12-18.
 */
export class DashboardCard {
  componentType: string;
  functionParameters: FunctionParameter[];
  constructor(type: string, functionParameters: FunctionParameter[]) {
    this.componentType = type;
    this.functionParameters = functionParameters;
  }
  addFuntionParameter(functionParameter: FunctionParameter) {
    this.functionParameters.push(functionParameter);
  }
}
