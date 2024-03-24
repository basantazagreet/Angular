import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FifthComponent } from './fifth/fifth.component';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { UsersComponent } from './users/users.component';
import { NopageComponent } from './nopage/nopage.component';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  {
    path: 'about',
    component:FifthComponent,
    children:[{
      path:'company',
      component:SecondComponent
    }
    ]

  },
  {
    path: 'services',
    component:SecondComponent
  },
  {
    path: 'contact',
    component:FirstComponent
  },
  {
    path: 'users/:id',
    component:UsersComponent
  },
  {
    path:'auth', loadChildren:()=>import('./auth/auth.module').then(mod=>AuthModule)
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
