import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DynamicBoardCardComponent } from './dynamic-board-card/dynamic-board-card.component';
import { DynamicDashboardCardModule } from './dynamic-dashboard-card/dynamic-dashboard-card.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DynamicBoardCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DynamicDashboardCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
