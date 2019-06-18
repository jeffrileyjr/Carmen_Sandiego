import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PexelApiService {

  // apiKey:string = "563492ad6f9170000100000128cb04362abc4b32b717e2c8e9125276";
  apiKey:string = "563492ad6f917000010000014a9669d68f174ec5af529706f09b0407";


  httpOptions = {
    headers: new HttpHeaders({
      Authorization: `${this.apiKey}`
    })
  };

  constructor(private http: HttpClient) { }

  getLocationPhoto(location) {
    return this.http.get(`https://api.pexels.com/v1/search?query=${location}+query&per_page=10&page=1`, this.httpOptions);
  }
}
