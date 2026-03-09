import { Component, OnInit } from '@angular/core';
import { CityStateService } from '../../services/city-state.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {

  cityName: string = "";

  constructor(private cityService: CityStateService) {}

  ngOnInit() {

    this.cityService.$city.subscribe(data => {
      this.cityName = data;
    });

  }

}
