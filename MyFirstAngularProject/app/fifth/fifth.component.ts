import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { UserdataService } from '../services/userdata.service';
import { RestaurantapiService } from '../services/restaurantapi.service';

@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrl: './fifth.component.css',
})
export class FifthComponent {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),
    password: new FormControl('',[Validators.minLength(6)])
  });

  formHandler(val: any) {
    console.log(val);
  }
  reactiveFormHandler(){
    console.log(this.loginForm.value);
  }

  get name(){
    return this.signupForm.get('name');
  }

  get email(){
    return this.signupForm.get('email');
  }

  signupFormHandler(){
    console.log(this.signupForm.value);
  }

  get password(){
    return this.signupForm.get('password');
  }

  users:any[]=[];
  restaurants:any[]=[];

  constructor(private userdata:UserdataService){
    this.users = userdata.users();
  }


}
