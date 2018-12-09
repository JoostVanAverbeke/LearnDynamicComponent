import {Component, Inject, Input, OnInit} from '@angular/core';
import {BOARD} from '../shared/tokens/board.token';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  @Input() board: number;
  constructor(@Inject(BOARD) private injectedBoard: number) { }

  ngOnInit() {
    this.board = this.board || this.injectedBoard;
  }
}
