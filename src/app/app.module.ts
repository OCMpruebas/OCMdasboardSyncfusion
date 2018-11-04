import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Controles SyncFusion
import { ChartAllModule, AccumulationChartAllModule } from '@syncfusion/ej2-ng-charts';
import { GridAllModule } from '@syncfusion/ej2-ng-grids';
import { ChartComponent } from './chart/chart.component';
import { PieComponent } from './pie/pie.component';
import { GridComponent } from './grid/grid.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    PieComponent,
    GridComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    ChartAllModule,
    AccumulationChartAllModule,
    GridAllModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
