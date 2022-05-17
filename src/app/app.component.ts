import { weatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private WeatherService:WeatherService){

  }

  cityName?:string;
  weatherData?:weatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName='';
  }
  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName='';
  }

  private getWeatherData(cityName:string) {
    this.WeatherService.getWeatherData(cityName)
    .subscribe({
      next:(response)=>{
        this.weatherData=response;
        console.log(response);
      }
    });
  }

}
