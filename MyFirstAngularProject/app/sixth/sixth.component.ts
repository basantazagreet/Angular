import { Component } from '@angular/core';
import { RestaurantapiService } from '../services/restaurantapi.service';

@Component({
  selector: 'app-sixth',
  templateUrl: './sixth.component.html',
  styleUrl: './sixth.component.css'
})
export class SixthComponent {

  restaurants:any;
  constructor(private restaurantdata:RestaurantapiService){
    restaurantdata.restaurants().subscribe((data)=>{this.restaurants=data});
  }
  postRestaurantHandler(val:any){
    this.restaurantdata.postRestaurant(val).subscribe((result)=>{console.log(result);});
  }
}
