import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {WeatherService} from '../../weather.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-add-weather-card',
  templateUrl: './add-weather-card.component.html',
  styleUrls: ['./add-weather-card.component.scss']
})
export class AddWeatherCardComponent implements OnInit {
  public city: string;
  @Output() weatherCityAdded = new EventEmitter<string>();

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  onAddCity() {
    this.weatherCityAdded.emit(this.city);
  }

}
