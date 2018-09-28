import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services';

import { Weather } from '../models';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {

  weather: Weather;
  cityId: number = 5809844; // city ID for Seattle for the weather API

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeather(this.cityId)
      .subscribe( weatherData => {
        this.weather = weatherData;
      });
  }

}
