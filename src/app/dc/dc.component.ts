import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../services';
import { Weather } from '../models';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {

  weather: Weather;
  cityId: number = 4140963;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeather(this.cityId)
      .subscribe( weatherData => {
        this.weather = weatherData;
    });
  }

}
