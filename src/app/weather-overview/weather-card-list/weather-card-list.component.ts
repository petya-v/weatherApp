import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../../weather.service';
import {WeatherItem} from '../../models/weather-item';


@Component({
  selector: 'app-weather-card-list',
  templateUrl: './weather-card-list.component.html',
  styleUrls: ['./weather-card-list.component.scss']
})
export class WeatherCardListComponent implements OnInit {
  private weatherList: Array<WeatherItem> = [];

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  onWeatherItemAdded(cityName: string) {
    const weatherList: Array<WeatherItem> = [];
    this.weatherService.find(cityName).subscribe(weatherItem => {
      weatherList.push(weatherItem);
      this.weatherList = [...weatherList];
    });
  }
}
