import {Component, Injector, Input, OnInit, ReflectiveInjector} from '@angular/core';
import { BurndownComponent} from '../burndown/burndown.component';
import { OverviewComponent} from '../overview/overview.component';
import { UnsupportedCardComponent} from '../unsupported-card/unsupported-card.component';
import { CARD_COMPONENT_KEY } from '../shared/tokens/card.component.key.token';
import { DynamicTitleComponent } from '../dynamic-title/dynamic-title.component';
import { FunctionParameter } from '../shared/models/function.parameter';
import { FUNCTION_PARAMETERS } from '../shared/tokens/function-parameters.token';
import {FunctionParameters} from '../shared/models/function.parameters';

@Component({
  selector: 'app-dynamic-board-card',
  templateUrl: './dynamic-board-card.component.html',
  styleUrls: ['./dynamic-board-card.component.css']
})
export class DynamicBoardCardComponent implements OnInit {
  @Input() componentType: string;
  @Input() functionParameters: FunctionParameters;
  outlet = null;
  dynamicComponentInjector: Injector;

  constructor(private parentInjector: Injector) { }

  set dynamicFunctionsParameters(functionParameters: FunctionParameters) {
    this.dynamicComponentInjector = ReflectiveInjector.resolveAndCreate([{
      provide: FUNCTION_PARAMETERS,
      useValue: functionParameters,
    }], this.parentInjector);
  }

  set dynamicCardComponentKey(key: string) {
    this.dynamicComponentInjector = ReflectiveInjector.resolveAndCreate([{
      provide: CARD_COMPONENT_KEY,
      useValue: key,
    }], this.parentInjector);
  }

  ngOnInit() {
    if (this.componentType === 'burndown') {
      this.outlet = BurndownComponent;
      this.dynamicFunctionsParameters = this.functionParameters;
    } else if (this.componentType === 'overview') {
      this.outlet = OverviewComponent;
      this.dynamicFunctionsParameters = this.functionParameters;
    } else if (this.componentType === 'dynamic-title') {
      this.outlet = DynamicTitleComponent;
      this.dynamicFunctionsParameters = this.functionParameters;
    } else {
      this.outlet = UnsupportedCardComponent;
      this.dynamicCardComponentKey = this.componentType;
    }
  }

}
