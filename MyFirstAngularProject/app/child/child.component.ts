import { Component, Input } from '@angular/core';

interface Userdata{name:String, city:String, phone:String} 


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

@Input() User:Userdata= {name:'', city:'', phone:''}

}
