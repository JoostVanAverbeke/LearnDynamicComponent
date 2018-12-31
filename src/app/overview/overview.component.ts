import { Component, Inject, Input, OnInit } from '@angular/core';
import { FunctionParameter } from '../shared/models/function.parameter';
import { FUNCTION_PARAMETERS } from '../shared/tokens/function-parameters.token';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  @Input() board: number;
  constructor(@Inject(FUNCTION_PARAMETERS) private functionParametersInjected: FunctionParameter[]) {
  }
  ngOnInit() {
    this.board = this.board || this.getBoardFunctionParameterValue();
  }
  private getBoardFunctionParameterValue(): number {
    let returnBoard: number = null;
    let boardFunctionParameter: FunctionParameter;
    if (this.functionParametersInjected && this.functionParametersInjected.length > 0) {
      boardFunctionParameter = this.functionParametersInjected.find(
        functionParameter => functionParameter.parameter === 'board');
      if (boardFunctionParameter) {
        returnBoard = boardFunctionParameter.value;
      }
    }
    return returnBoard;
  }
}
