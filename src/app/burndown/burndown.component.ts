import {Component, Inject, Input, OnInit} from '@angular/core';
import {BOARD} from '../shared/tokens/board.token';

@Component({
  selector: 'app-burndown',
  templateUrl: './burndown.component.html',
  styleUrls: ['./burndown.component.css']
})
export class BurndownComponent implements OnInit {
  @Input() board: number;
  constructor(@Inject(BOARD) private injectedBoard: number) { }

  ngOnInit() {
    this.board = this.board || this.injectedBoard;
  }

}
