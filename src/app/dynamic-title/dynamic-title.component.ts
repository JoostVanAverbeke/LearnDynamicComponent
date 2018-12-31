import { Component, Inject, InjectionToken, Input, OnInit} from '@angular/core';
import { FUNCTION_PARAMETERS} from '../shared/tokens/function-parameters.token';
import { FunctionParameter} from '../shared/models/function.parameter';

@Component({
  selector: 'app-dynamic-title',
  templateUrl: './dynamic-title.component.html',
  styleUrls: ['./dynamic-title.component.css']
})
export class DynamicTitleComponent implements OnInit {
  @Input() title;

  constructor(@Inject(FUNCTION_PARAMETERS) private functionParametersInjected: FunctionParameter[]) {
  }

  ngOnInit() {
    this.title = this.title || this.getTitleFunctionParameterValue();
  }

  private getTitleFunctionParameterValue(): string {
    let returnTitle: string = null;
    let titleFunctionParameter: FunctionParameter;
    if (this.functionParametersInjected && this.functionParametersInjected.length > 0) {
      titleFunctionParameter = this.functionParametersInjected.find(
        functionParameter => functionParameter.parameter === 'title');
      if (titleFunctionParameter) {
        returnTitle = titleFunctionParameter.value;
      }
    }
    return returnTitle;
  }

}
