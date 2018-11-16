import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../weather.service';

@Component({
  selector: 'app-add-weather-card',
  templateUrl: './add-weather-card.component.html',
  styleUrls: ['./add-weather-card.component.scss']
})
export class AddWeatherCardComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.findByName('Sofia').subscribe();
  }

}
