import { DashboardCardMap } from './dashboard-card-map';
import { DynamicTitleComponent } from '../../dynamic-title/dynamic-title.component';

/**
 * Created by joost on 06-01-19.
 */

describe('DashboardCardMap', () => {
  it('is a singleton class and can only be constructed via the class method .getInstance()', () => {
    expect(DashboardCardMap.getInstance() instanceof DashboardCardMap).toBeTruthy();
  });

  it('allows to return a specified element from the DashboardCardMap', () => {
    expect(DashboardCardMap.getInstance().getDashboardCardComponent('dynamic-title')).not.toBeNull();
  });

  it('returns undefined when the component key is not known in the DashboardCardMap', () => {
    expect(DashboardCardMap.getInstance().getDashboardCardComponent('unknown')).not.toBeDefined();
  });
});
