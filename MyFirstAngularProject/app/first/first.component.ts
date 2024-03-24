import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  name:String="";
  count=0;
  logIt(val:String){
    console.log(val);
  }
  displayVal(val:String){
    this.name=val;
  }
  changeCounter(val:String){
    val === 'increase' ? this.count++ : this.count--; 

  }
}
