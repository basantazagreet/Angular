import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { AuthRoutingModule } from './auth/auth-routing.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { HeaderComponent } from './header/header.component';
import { ThirdComponent } from './third/third.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ChildComponent } from './child/child.component';
import { ChildtoparentComponent } from './childtoparent/childtoparent.component';
import { FifthComponent } from './fifth/fifth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RedElementDirective } from './red-element.directive';
import { UsersComponent } from './users/users.component';
import { NopageComponent } from './nopage/nopage.component';
import { HttpClientModule } from '@angular/common/http';
import { SixthComponent } from './sixth/sixth.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { SeventhComponent } from './seventh/seventh.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    HeaderComponent,
    ThirdComponent,
    ChildComponent,
    ChildtoparentComponent,
    FifthComponent,
    RedElementDirective,
    UsersComponent,
    NopageComponent,
    SixthComponent,
    AComponent,
    BComponent,
    SeventhComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule,
    AuthRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
