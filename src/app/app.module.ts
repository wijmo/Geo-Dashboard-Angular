import '../license';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';
import { WjChartModule } from '@grapecity/wijmo.angular2.chart';
import { WjChartMapModule } from '@grapecity/wijmo.angular2.chart.map';
import { WjGaugeModule } from '@grapecity/wijmo.angular2.gauge';
import { WjNavModule } from '@grapecity/wijmo.angular2.nav';
import { WjChartAnimationModule } from '@grapecity/wijmo.angular2.chart.animation';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GdashTileComponent } from './components/gdash-tile.component';
import { GdashMapComponent } from './components/gdash-map.component';
import { PopulationTileComponent } from './components/population-tile.component';
import { MedianAgeTileComponent} from './components/median-age-tile.component';
import { NetWorthTileComponent } from "./components/net-worth-tile.component";
import { HomeValueTileComponent  } from "./components/home-value-tile.component";
import { HouseholdIncomeTileComponent } from "./components/household-income-tile.component";
import { GdashGaugeComponent } from "./components/gdash-gauge.component";

import { DataService } from './services/data-service';

@NgModule({
  declarations: [
    AppComponent,
    GdashTileComponent,
    GdashMapComponent,
    PopulationTileComponent,
    MedianAgeTileComponent,
    NetWorthTileComponent,
    HomeValueTileComponent,
    HouseholdIncomeTileComponent,
    GdashGaugeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    WjChartAnimationModule,
    WjInputModule,
    WjChartModule,
    WjChartMapModule,
    WjGaugeModule,
    WjNavModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
