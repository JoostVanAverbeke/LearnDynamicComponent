import { FunctionParameter } from './function.parameter';
import { FunctionParameters } from './function.parameters';
/**
 * Created by joost on 09-12-18.
 */
export class DashboardCard {
  private _componentType: string;
  private _functionParameters: FunctionParameters;
  constructor(type: string) {
    this._componentType = type;
    this._functionParameters = new FunctionParameters();
  }
  addFunctionParameter(functionParameter: FunctionParameter): void {
    this._functionParameters.push(functionParameter);
  }
  numberOfFunctionParameters(): number {
    return this._functionParameters.length();
  }
  get componentType(): string {
    return this._componentType;
  }
  get functionParameters(): FunctionParameters {
    return this._functionParameters;
  }
}
