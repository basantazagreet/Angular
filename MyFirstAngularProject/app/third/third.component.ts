import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// Define the Todo interface
interface Todo {
  id: number;
  todo: string;
}

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrl: './third.component.css',
  
})
export class ThirdComponent {
  userData:any={};
  todolist:any[]=[];
 @ Input() myVar = 0;


  formHandler(val:NgForm){
    console.log("Form works!!" +val);
    this.userData=val;
    console.log(this.userData);
  }
  display:boolean=true;
  toggleForm(){
    this.display=!this.display;
  }
  addTask(value:string){
    
    this.todolist.push({id:this.todolist.length, todo:value})
  }
  deleteTask(value:number){
    this.todolist=this.todolist.filter(item=>item.id!==value)
  }
  displayData(){
    console.log(this.myVar);
  }
}
