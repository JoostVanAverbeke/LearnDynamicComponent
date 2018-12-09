import {InjectionToken} from '@angular/core';

/**
 * Created by joost on 09-12-18.
 */
export const BOARD = new InjectionToken<string>('board', {
  providedIn: 'root',
  factory: () => 'board'
});
