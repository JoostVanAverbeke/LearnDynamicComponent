/**
 * Created by joost on 09-12-18.
 */
export class DashboardCard {
  componentType: string;
  board: number;
  constructor(type: string, board: number) {
    this.componentType = type;
    this.board = board;
  }
}
