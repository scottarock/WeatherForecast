import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../services';
import { Weather } from '../models';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {

  weather: Weather;
  cityId: number = 5331835; // city ID for Burbank for the weather API

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeather(this.cityId)
      .subscribe( weatherData => {
        this.weather = weatherData;
    });
  }

}
