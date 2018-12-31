import { Component, Inject, InjectionToken, Input, OnInit} from '@angular/core';
import { FUNCTION_PARAMETERS} from '../shared/tokens/function-parameters.token';
import { FunctionParameter} from '../shared/models/function.parameter';
import { FunctionParameters } from '../shared/models/function.parameters';

@Component({
  selector: 'app-dynamic-title',
  templateUrl: './dynamic-title.component.html',
  styleUrls: ['./dynamic-title.component.css']
})
export class DynamicTitleComponent implements OnInit {
  @Input() title;

  second: string;
  constructor(@Inject(FUNCTION_PARAMETERS) private functionParametersInjected: FunctionParameters) {
  }

  ngOnInit() {
    this.title = this.title || this.getTitleFunctionParameterValue();
    this.second = this.getSecondFunctionParameterValue();
  }

  private getTitleFunctionParameterValue(): string {
    let returnTitle: string = null;
    let titleFunctionParameter: FunctionParameter;
    if (this.functionParametersInjected) {
      titleFunctionParameter = this.functionParametersInjected.findByParameter('title');
      if (titleFunctionParameter) {
        returnTitle = titleFunctionParameter.value;
      }
    }
    return returnTitle;
  }

  private getSecondFunctionParameterValue(): string {
    let returnSecond: string = null;
    let secondFunctionParameter: FunctionParameter;
    if (this.functionParametersInjected) {
      secondFunctionParameter = this.functionParametersInjected.findByParameter('second');
      if (secondFunctionParameter) {
        returnSecond = secondFunctionParameter.value;
      }
    }
    return returnSecond;
  }
}
