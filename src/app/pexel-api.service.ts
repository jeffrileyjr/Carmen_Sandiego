import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PexelApiService {

  // apiKey:string = "563492ad6f9170000100000128cb04362abc4b32b717e2c8e9125276";
  // second key
  // apiKey:string = "563492ad6f917000010000014a9669d68f174ec5af529706f09b0407";
  // apiKey:string = "563492ad6f91700001000001e6e48cd47bd449b78f60933192bbf8b8"

  // apiKey: string = "563492ad6f91700001000001de8fe8f0d0c347eb9f22d6366e0780fd";
  apiKey: string = "563492ad6f917000010000017412b886e2eb44d2b968e5bd22bed326";

    photoURL;
    randomPhoto: number = Math.floor((Math.random() * 10));



  httpOptions = {
    headers: new HttpHeaders({
    Authorization: `${this.apiKey}`
    })
  };

  constructor(private http: HttpClient) { }

  getLocationPhoto(location) {
    return this.http.get(`https://api.pexels.com/v1/search?query=${location}+query&per_page=15&page=1`, this.httpOptions);
  }


}
