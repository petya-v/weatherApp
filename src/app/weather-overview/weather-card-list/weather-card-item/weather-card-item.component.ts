import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {WeatherService} from '../../../weather.service';
import {WeatherItem} from '../../../models/weather-item';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-weather-card-item',
  templateUrl: './weather-card-item.component.html',
  styleUrls: ['./weather-card-item.component.scss']
})
export class WeatherCardItemComponent implements OnInit {
  // public weatherItem: WeatherItem;
  @Input() weatherItem: WeatherItem;
  private subscriptions: Subscription = new Subscription();
  public currentDate = new Date();

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    // this.subscriptions.add(this.weatherService.weather$.subscribe(
    //   weatherItem => this.weatherItem = weatherItem
    // ));
  }
}
