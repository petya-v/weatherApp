import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { WeatherOverviewComponent } from './weather-overview/weather-overview.component';
import { WeatherCardListComponent } from './weather-overview/weather-card-list/weather-card-list.component';
import { WeatherCardItemComponent } from './weather-overview/weather-card-list/weather-card-item/weather-card-item.component';
import { AddWeatherCardComponent } from './weather-overview/add-weather-card/add-weather-card.component';
import { WeatherCardImageComponent } from './weather-overview/weather-card-list/weather-card-item/weather-card-image/weather-card-image.component';
import { WeatherService } from './weather.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherCardWrapperComponent } from './weather-overview/weather-card-wrapper/weather-card-wrapper.component';

const routes: Routes = [
  { path: '', component: WeatherOverviewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WeatherOverviewComponent,
    WeatherCardListComponent,
    WeatherCardItemComponent,
    AddWeatherCardComponent,
    WeatherCardImageComponent,
    WeatherCardWrapperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [
    AppComponent
  ],
  exports: [
  ],
  entryComponents: [
    WeatherCardItemComponent
  ]
})
export class AppModule { }
