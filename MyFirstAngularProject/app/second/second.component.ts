import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrl: './second.component.css',
})
export class SecondComponent {
  name: String = 'Basanta Sapkota';
  disable = false;
  display = true;
  color = 'red';
  textColor='green';
  bgColor='yellow';
  userDetails = [
    {name:'Basanta Sapkota' ,email:'basanta@test.com', phone:'9869047383', favMovies:['Lord of the rings', 'Into the wild', 'Benjamin Button']},
    {name:'Hemanta Sapkota' ,email:'hemanta@test.com', phone:'9869047383', favMovies:['Inception', 'Harry potter', 'Into the wild']},
    {name:'Diwas Kandel' ,email:'diwas@test.com', phone:'9869047383', favMovies:['Skyfall', 'Avengers', 'Iron man']}
];
  changeDisplay() {
    this.display = !this.display;
  }
  changeTextColor(){
    this.textColor="blue";
    this.bgColor="orange";
  }

}
