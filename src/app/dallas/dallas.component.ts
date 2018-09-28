import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../services';
import { Weather } from '../models';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {

  weather: Weather;
  cityId: number = 4684888;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeather(this.cityId)
      .subscribe( weatherData => {
        this.weather = weatherData;
    });
  }

}
