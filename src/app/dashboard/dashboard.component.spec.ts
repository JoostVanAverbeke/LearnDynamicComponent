import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { DashboardCardService } from '../shared/services/dashboard-card.service';
import { DynamicBoardCardComponent } from '../dynamic-board-card/dynamic-board-card.component';
import { DynamicDashboardCardModule } from '../dynamic-dashboard-card/dynamic-dashboard-card.module';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        DynamicBoardCardComponent,
      ],
      providers: [
        DashboardCardService
      ],
      imports: [
        DynamicDashboardCardModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
