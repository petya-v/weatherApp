import {Component, Input, OnInit} from '@angular/core';
import {Weather} from '../../../../models/weather-item';
import {debug} from 'util';

@Component({
  selector: 'app-weather-card-image',
  templateUrl: './weather-card-image.component.html',
  styleUrls: ['./weather-card-image.component.scss']
})
export class WeatherCardImageComponent implements OnInit {
  @Input() weather: Weather;
  private weatherCondition: string;

  constructor() { }

  ngOnInit() {
    this.weatherCondition = this.weather[0].main;
    debugger;
  }

}
