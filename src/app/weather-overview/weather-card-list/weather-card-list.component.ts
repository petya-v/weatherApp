import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {WeatherService} from '../../weather.service';
import {WeatherItem} from '../../models/weather-item';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-weather-card-list',
  templateUrl: './weather-card-list.component.html',
  styleUrls: ['./weather-card-list.component.scss']
})
export class WeatherCardListComponent implements OnInit {
  private weatherList: Array<WeatherItem> = [];

  constructor(private weatherService: WeatherService,
              public toastr: ToastrService) {
  }

  ngOnInit() {
    this.weatherService.weather$
      .subscribe(weatherItem => {
        this.weatherList = [...this.weatherList, weatherItem];
      });

    this.weatherService.weatherErr$.subscribe(err => {
      this.toastr.error(err.message);
    });
  }

  onWeatherItemAdded(cityName: string) {
    this.weatherService.find(cityName);
  }
}

