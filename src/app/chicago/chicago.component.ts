import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../services';
import { Weather } from '../models';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {

  weather: Weather;
  cityId: number = 4887398; // city ID for Chicago for the weather API

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeather(this.cityId)
      .subscribe( weatherData => {
        this.weather = weatherData;
    });
  }

}
