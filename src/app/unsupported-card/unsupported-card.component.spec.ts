import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsupportedCardComponent } from './unsupported-card.component';

describe('UnsupportedCardComponent', () => {
  let component: UnsupportedCardComponent;
  let fixture: ComponentFixture<UnsupportedCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsupportedCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsupportedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
