import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DynamicBoardCardComponent} from './dynamic-board-card/dynamic-board-card.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { DynamicDashboardCardModule } from './dynamic-dashboard-card/dynamic-dashboard-card.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DashboardComponent,
        DynamicBoardCardComponent,
      ],
      imports: [
        DynamicDashboardCardModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'LearnDynamicComponent'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('LearnDynamicComponent');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to LearnDynamicComponent!');
  }));
});
