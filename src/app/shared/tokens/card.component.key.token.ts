import {InjectionToken} from '@angular/core';

/**
 * Created by joost on 09-12-18.
 */

export const CARD_COMPONENT_KEY = new InjectionToken<string>('card_component_key', {
  providedIn: 'root',
  factory: () => 'card_component_key'
});
