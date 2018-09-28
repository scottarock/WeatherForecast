import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Weather } from '../models';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly apiBase: string = 'http://api.openweathermap.org/data/2.5/weather';
  private readonly apiKey: string = 'APPID=d3c69928d194b1296e6258f7e11f5bda';

  constructor(private http: HttpClient) { }

  getWeather(cityId: number): Observable<Weather> {
    return this.http.get<Weather>(
      `${this.apiBase}?id=${cityId}&units=imperial&${this.apiKey}`
    );
  }
}
