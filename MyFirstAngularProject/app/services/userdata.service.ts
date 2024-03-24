import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users(){
    return [
      {name:'Basanta Sapkota', age:28, email:'basanta@test.com' },
      {name:'Hemanta Sapkota', age:28, email:'hemanta@test.com' },
      {name:'Diwas Kandel', age:28, email:'diwas@test.com' }
    ]
  }
}
