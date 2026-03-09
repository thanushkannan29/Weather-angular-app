import { Component, OnInit } from '@angular/core';
import { CityStateService } from '../../services/city-state.service';
import { DisplayOutputModel } from '../../Models/weather-display.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-display.html',
  styleUrl: './weather-display.css'
})
export class WeatherDisplay implements OnInit {

  weatherData: DisplayOutputModel = new DisplayOutputModel();

  constructor(private cityService: CityStateService) {}

  ngOnInit() {

    this.cityService.$weather.subscribe(data => {
      this.weatherData = data;
    });

  }

}
