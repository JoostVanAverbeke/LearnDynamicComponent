import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from '../overview/overview.component';
import { DynamicTitleComponent } from '../dynamic-title/dynamic-title.component';
import { BurndownComponent } from '../burndown/burndown.component';
import { UnsupportedCardComponent } from '../unsupported-card/unsupported-card.component';

@NgModule({
  declarations: [
    UnsupportedCardComponent,
    BurndownComponent,
    DynamicTitleComponent,
    OverviewComponent,
  ],
  exports: [
    UnsupportedCardComponent,
    BurndownComponent,
    DynamicTitleComponent,
    OverviewComponent,
  ],
  entryComponents: [
    UnsupportedCardComponent,
    BurndownComponent,
    DynamicTitleComponent,
    OverviewComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class DynamicDashboardCardModule { }
