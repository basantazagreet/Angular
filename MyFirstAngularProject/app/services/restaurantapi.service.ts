import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantapiService {

  constructor(private http:HttpClient) { }

  restaurants(){
    return this.http.get('http://localhost:3000/Restaurants');
  }

  postRestaurant(data:any){
    return this.http.post('http://localhost:3000/Restaurants', data);
  }
}
