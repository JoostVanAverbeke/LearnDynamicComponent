import {Component, Injector, Input, OnInit, ReflectiveInjector} from '@angular/core';
import { BurndownComponent} from '../burndown/burndown.component';
import { OverviewComponent} from '../overview/overview.component';
import { BOARD} from '../shared/tokens/board.token';
import { UnsupportedCardComponent} from '../unsupported-card/unsupported-card.component';
import { CARD_COMPONENT_KEY } from '../shared/tokens/card.component.key.token';

@Component({
  selector: 'app-dynamic-board-card',
  templateUrl: './dynamic-board-card.component.html',
  styleUrls: ['./dynamic-board-card.component.css']
})
export class DynamicBoardCardComponent implements OnInit {
  @Input() componentType: string;
  @Input() board: number;
  outlet = null;
  dynamicComponentInjector: Injector;

  constructor(private parentInjector: Injector) { }

  set dynamicBoardId(id: number) {
    this.dynamicComponentInjector = ReflectiveInjector.resolveAndCreate([{
      provide: BOARD,
      useValue: id,
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
      this.dynamicBoardId = this.board;
    } else if (this.componentType === 'overview') {
      this.outlet = OverviewComponent;
      this.dynamicBoardId = this.board;
    } else {
      this.outlet = UnsupportedCardComponent;
      this.dynamicCardComponentKey = this.componentType;
    }
  }

}
