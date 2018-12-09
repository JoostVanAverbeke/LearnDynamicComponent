import {Component, Inject, Input, OnInit} from '@angular/core';
import {CARD_COMPONENT_KEY} from '../shared/tokens/card.component.key.token';

@Component({
  selector: 'app-unsupported-card',
  templateUrl: './unsupported-card.component.html',
  styleUrls: ['./unsupported-card.component.css']
})
export class UnsupportedCardComponent implements OnInit {
  @Input() key: string;
  constructor(@Inject(CARD_COMPONENT_KEY) private injectedKey: string) { }

  ngOnInit() {
    this.key = this.key || this.injectedKey;
  }

}
