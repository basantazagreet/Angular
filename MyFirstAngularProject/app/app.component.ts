import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'code-step-by-step';
  data = 10;
  userDetails:any[]=[
    {name:"Basanta Sapkota", city:'Gaindakot', phone: 9869047383},
    {name:"Hemanta Sapkota", city:'Gaindakot', phone: 9869047383},
    {name:"Diwas Sapkota", city:'Gaindakot', phone: 9869047383}
];
  changeData(){
   this.data = Math.floor(Math.random()*100);
  }
  updateData(val:any){
    console.log(val);
  }
}
