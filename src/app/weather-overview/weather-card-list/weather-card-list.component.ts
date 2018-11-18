import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {WeatherService} from '../../weather.service';
import {WeatherCardItemComponent} from './weather-card-item/weather-card-item.component';


@Component({
  selector: 'app-weather-card-list',
  templateUrl: './weather-card-list.component.html',
  styleUrls: ['./weather-card-list.component.scss']
})
export class WeatherCardListComponent implements OnInit {
  public weatherCities$ = this.weatherService.weather$;

  @ViewChild('listContainer', { read: ViewContainerRef }) entry: ViewContainerRef;
  constructor(private weatherService: WeatherService,
              private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(WeatherCardItemComponent);
    this.weatherCities$.subscribe(weather => {
      let componentRef: any;
      componentRef = this.entry.createComponent(factory);
      componentRef.instance.weatherItem = weather;
    });
  }
}
