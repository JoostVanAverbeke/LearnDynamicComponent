import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicTitleComponent } from './dynamic-title/dynamic-title.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DynamicBoardCardComponent } from './dynamic-board-card/dynamic-board-card.component';
import { BurndownComponent } from './burndown/burndown.component';
import { OverviewComponent } from './overview/overview.component';
import { UnsupportedCardComponent } from './unsupported-card/unsupported-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicTitleComponent,
    DashboardComponent,
    DynamicBoardCardComponent,
    BurndownComponent,
    OverviewComponent,
    UnsupportedCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    DynamicTitleComponent,
    OverviewComponent,
    BurndownComponent,
    UnsupportedCardComponent,
  ]
})
export class AppModule { }
