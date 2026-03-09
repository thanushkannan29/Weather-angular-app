import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { DisplayOutputModel } from "../Models/weather-display.model";
//makes service available for dependency injection
@Injectable({
  providedIn: 'root'//global singleton service
})
export class CityStateService {

  private citySource = new BehaviorSubject<string>("");//BehaviorSubject stores latest value.

  public $city = this.citySource.asObservable();//$ indicates observable stream.

  setCity(city: string) {
    this.citySource.next(city);
  }

  private weatherSource = new BehaviorSubject<DisplayOutputModel>(new DisplayOutputModel());

  public $weather = this.weatherSource.asObservable();

  setWeather(data: DisplayOutputModel) {
    this.weatherSource.next(data);
  }

}
