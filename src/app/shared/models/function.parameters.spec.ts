import { FunctionParameters } from './function.parameters';
import {FunctionParameter} from './function.parameter';
/**
 * Created by joost on 05-01-19.
 */
describe('FunctionParameters', () => {
  let functionParameters: FunctionParameters;

  beforeEach(() => {
    functionParameters = new FunctionParameters();
  });

  it('should create', () => {
    const dashboardCard = new FunctionParameters();
  });

  it('allows to push a function parameter to the array of function parameters', () => {
    functionParameters.push({ parameter: 'parameter1', value: 'value1'});
    functionParameters.push({ parameter: 'parameter2', value: { hello: 'world'}});
    expect(functionParameters.length()).toEqual(2);
  });

  it('returns the length of the array of function parameters', () => {
    functionParameters.push({ parameter: 'parameter1', value: 'value1'});
    expect(functionParameters.length()).toEqual(1);
  });

  it('allows to retrieve a function parameter by its parameter value', () => {
    functionParameters.push({ parameter: 'parameter1', value: 'value1'});
    functionParameters.push({ parameter: 'parameter2', value: { hello: 'world'}});
    const functionParameter: FunctionParameter = functionParameters.findByParameter('parameter2');
    expect(functionParameter.parameter).toEqual('parameter2');
    expect(functionParameter.value.hello).toEqual('world');
  });
});

