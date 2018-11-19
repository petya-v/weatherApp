import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Weather, WeatherItem} from './models/weather-item';
import {filter, map, tap} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private _weather$: BehaviorSubject<WeatherItem> = new BehaviorSubject(null);
  private apiKey = 'dc01ad6de4d0b5dfd6ebfbd9696e6b2a';
  private url = 'http://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  get weather$(): Observable<WeatherItem> {
    return this._weather$.pipe(filter(weather => weather !== null));
  }


  find(cityName?: string) {
    const params = new HttpParams()
      .set('q', cityName)
      .set('units', 'metric')
      .set('appid', this.apiKey);

    this.http.get<WeatherItem>(this.url, {params})
    .subscribe(weather => {
      this._weather$.next(weather);
    });

    return this._weather$;
  }
}
