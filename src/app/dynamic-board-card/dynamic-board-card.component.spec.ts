import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicBoardCardComponent } from './dynamic-board-card.component';
import { DynamicDashboardCardModule } from '../dynamic-dashboard-card/dynamic-dashboard-card.module';

describe('DynamicBoardCardComponent', () => {
  let component: DynamicBoardCardComponent;
  let fixture: ComponentFixture<DynamicBoardCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DynamicBoardCardComponent,
      ],
      imports: [
        DynamicDashboardCardModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicBoardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
