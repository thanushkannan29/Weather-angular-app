import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SearchCityModel } from "../Models/search-city.model";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}//Angular service to call APIs

  searchCity(city: string){
return this.http.get(
`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
);
}



  getWeather(lat: number, lon: number) {

    return this.http.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
    );

  }

}
