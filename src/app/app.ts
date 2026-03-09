import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { Header } from './components/header/header';
import { WeatherSearch } from './components/weather-search/weather-search';
import { WeatherDisplay } from './components/weather-display/weather-display';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,HttpClientModule,Header,WeatherSearch,WeatherDisplay],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Weather-angular-app');
}
