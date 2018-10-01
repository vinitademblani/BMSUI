import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { SportsComponent } from './sports/sports.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CityService } from './city.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ShowComponent } from './show/show.component';
const appRoutes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'events',component:EventsComponent},
  {path:'sports',component:SportsComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'show/:cityId',component:ShowComponent}
  //{path:'',component:NavigationComponent},
  //{path:'**',component:NotfoundComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    EventsComponent,
    SportsComponent,
    NotfoundComponent,
    LoginComponent,
    SignupComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,RouterModule,HttpClientModule, FormsModule,ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
