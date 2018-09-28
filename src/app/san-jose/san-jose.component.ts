import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services';

import { Weather } from '../models';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {

  weather: Weather;
  cityId: number = 5392171; // city ID for San Jose for the weather API

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeather(this.cityId)
      .subscribe( weatherData => {
        this.weather = weatherData;
      });
  }

}
