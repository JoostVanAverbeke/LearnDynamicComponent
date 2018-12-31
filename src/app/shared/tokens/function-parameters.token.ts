import { InjectionToken } from '@angular/core';
import { FunctionParameter } from '../models/function.parameter';
/**
 * Created by joost on 30-12-18.
 */
export const FUNCTION_PARAMETERS = new InjectionToken<FunctionParameter[]>('function-parameters', {
  providedIn: 'root',
  factory: () => []
});
