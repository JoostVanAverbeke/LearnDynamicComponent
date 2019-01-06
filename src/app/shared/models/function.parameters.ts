import { FunctionParameter } from './function.parameter';

export class FunctionParameters {
  private _parameters: FunctionParameter[];

  public constructor() {
    this._parameters = new Array<FunctionParameter>();
  }

  public push(functionParameter: FunctionParameter): void {
    if (functionParameter) {
      this._parameters.push(functionParameter);
    }
  }

  public findByParameter(parameter: string): FunctionParameter {
    let returnFunctionParameter: FunctionParameter;
    if (this.length() > 0) {
      returnFunctionParameter = this._parameters.find(
        functionParameter => functionParameter.parameter === parameter);
    }
    return returnFunctionParameter;
  }

  public length(): number {
    return this._parameters.length;
  }
}


