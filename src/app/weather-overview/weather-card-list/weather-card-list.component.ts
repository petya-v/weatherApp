import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../weather.service';


@Component({
  selector: 'app-weather-card-list',
  templateUrl: './weather-card-list.component.html',
  styleUrls: ['./weather-card-list.component.scss']
})
export class WeatherCardListComponent implements OnInit {
  public weatherCities$ = this.weatherService.weather$;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

}
