import { FunctionParameter } from './function.parameter';
import { FunctionParameters } from './function.parameters';
/**
 * Created by joost on 09-12-18.
 */
export class DashboardCard {
  componentType: string;
  functionParameters: FunctionParameters;
  constructor(type: string) {
    this.componentType = type;
    this.functionParameters = new FunctionParameters();
  }
  addFuntionParameter(functionParameter: FunctionParameter) {
    this.functionParameters.push(functionParameter);
  }
}
