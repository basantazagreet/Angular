import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  userId:any = '';

  constructor(private route: ActivatedRoute){
  }
  
  ngOnInit():void{
    this.userId = this.route.snapshot.paramMap.get('id');
    console.log(this.userId);
  }


}
