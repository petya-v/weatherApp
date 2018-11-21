import {Component, Input, OnInit} from '@angular/core';
import {WeatherItem} from '../../../models/weather-item';

@Component({
  selector: 'app-weather-card-item',
  templateUrl: './weather-card-item.component.html',
  styleUrls: ['./weather-card-item.component.scss']
})
export class WeatherCardItemComponent implements OnInit {
  @Input() weatherItem: WeatherItem;
  public currentDate = new Date();

  constructor() {
  }

  ngOnInit() {
  }
}
