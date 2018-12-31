import { FunctionParameter } from './function.parameter';

export class FunctionParameters {
  parameters: FunctionParameter[];

  public constructor() {
    this.parameters = new Array<FunctionParameter>();
  }

  public push(functionParameter: FunctionParameter): void {
    if (functionParameter) {
      this.parameters.push(functionParameter);
    }
  }

  public findByParameter(parameter: string): FunctionParameter {
    let returnFunctionParameter: FunctionParameter;
    if (this.parameters.length > 0) {
      returnFunctionParameter = this.parameters.find(
        functionParameter => functionParameter.parameter === parameter);
    }
    return returnFunctionParameter;
  }
}


