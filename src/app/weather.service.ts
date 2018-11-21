import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {WeatherItem} from './models/weather-item';
import {catchError, filter} from 'rxjs/operators';
import {WeatherItemError} from './models/error-response';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private _weather$: BehaviorSubject<WeatherItem> = new BehaviorSubject(null);
  private _weatherErr$: BehaviorSubject<WeatherItemError> = new BehaviorSubject(null);
  private apiKey = 'dc01ad6de4d0b5dfd6ebfbd9696e6b2a';
  private url = 'http://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  get weather$(): Observable<WeatherItem> {
    return this._weather$.pipe(filter(weather => weather !== null));
  }

  get weatherErr$(): Observable<WeatherItemError> {
    return this._weatherErr$.pipe(filter(err => err !== null));
  }

  find(cityName?: string) {
    const params = new HttpParams()
      .set('q', cityName)
      .set('units', 'metric')
      .set('appid', this.apiKey);

    this.http.get<WeatherItem>(this.url, {params})
      .pipe(
        catchError((err) => {
          err = err.error;
          this._weatherErr$.next(err);
          return of(null);
      }))
      .subscribe(weather => this._weather$.next(weather));

    return this.weather$;
  }
}
