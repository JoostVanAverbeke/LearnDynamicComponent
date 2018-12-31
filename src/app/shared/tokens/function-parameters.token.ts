import { InjectionToken } from '@angular/core';
import {FunctionParameters} from '../models/function.parameters';
/**
 * Created by joost on 30-12-18.
 */
export const FUNCTION_PARAMETERS = new InjectionToken<FunctionParameters>('function-parameters', {
  providedIn: 'root',
  factory: () => new FunctionParameters()
});
