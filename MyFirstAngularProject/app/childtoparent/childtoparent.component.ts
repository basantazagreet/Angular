import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childtoparent',
  templateUrl: './childtoparent.component.html',
  styleUrl: './childtoparent.component.css'
})
export class ChildtoparentComponent {
  @Output() updateDataEvent = new EventEmitter<String>();

  name:any='';
  title:any="This is title that is piped";
  users:{name:String, address:String} = {name:'Basanta Sapkota', address:'Gaindakot'}
  displayVariable(val:HTMLInputElement){
    console.log(val);
  }
}
