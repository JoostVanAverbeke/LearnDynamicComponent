import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicBoardCardComponent } from './dynamic-board-card.component';

describe('DynamicBoardCardComponent', () => {
  let component: DynamicBoardCardComponent;
  let fixture: ComponentFixture<DynamicBoardCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicBoardCardComponent ]
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
