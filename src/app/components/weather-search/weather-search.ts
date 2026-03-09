import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { switchMap } from 'rxjs';
import { WeatherService } from '../../services/weather.service';
import { CityStateService } from '../../services/city-state.service';
import { SearchCityModel } from '../../Models/search-city.model';
import { DisplayOutputModel } from '../../Models/weather-display.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather-search',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './weather-search.html',
  styleUrl: './weather-search.css',
})
export class WeatherSearch {

  cityModel: SearchCityModel = new SearchCityModel();

  constructor(
    private weatherService: WeatherService,
    private cityService: CityStateService
  ) {}
loading=false;

 searchCity(){

this.loading=true;

this.weatherService.searchCity(this.cityModel.name)

.pipe(
switchMap((geo:any)=>{

const lat=geo.results[0].latitude;
const lon=geo.results[0].longitude;

this.cityService.setCity(this.cityModel.name);

return this.weatherService.getWeather(lat,lon);

})
)

.subscribe({

next:(weather:any)=>{

const output=new DisplayOutputModel();

output.name=this.cityModel.name;
output.temperature=weather.current_weather.temperature;
output.windspeed=weather.current_weather.windspeed;
output.weathercode=weather.current_weather.weathercode;

this.cityService.setWeather(output);

this.loading=false;

},

error:(err)=>{
console.error(err);
this.loading=false;
}

});

}


}
