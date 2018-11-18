import {Component, Input, OnInit} from '@angular/core';
import {Weather} from '../../../../models/weather-item';

@Component({
  selector: 'app-weather-card-image',
  templateUrl: './weather-card-image.component.html',
  styleUrls: ['./weather-card-image.component.scss']
})
export class WeatherCardImageComponent implements OnInit {
  @Input() weatherAnimation: Weather;
  private weather: string;

  constructor() { }

  ngOnInit() {
    this.weather = this.weatherAnimation[0].main;
  }

}
