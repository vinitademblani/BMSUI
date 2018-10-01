import { Component, OnInit, forwardRef,EventEmitter,Output } from '@angular/core';
import { Observable } from 'rxjs';
import {City} from '../City';
import {Show } from '../Show';
import { CityService } from '../city.service';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
   
})
export class NavigationComponent implements OnInit {
cityObserver:Observable<City[]>;

cityArray:City[];
showArray:Show[];
selected='';
@Output()
public emitShowData=new EventEmitter<any>();

  constructor(private cityService:CityService
    ,private route:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    
    this.cityObserver=this.cityService.getCities();
    this.cityObserver.subscribe(
      (response)=>{
        this.cityArray=response,
        console.log(response)},
      (error:any)=>{console.log(error)},
      ()=>{console.log('completed')}
    );
  }
  onChange(city)
  {
    this.selected=city.cityId;
    console.log('city name selected is ',city.cityName);
    this.route.navigate(['/show',this.selected]);
     }

  // sendShowArray(showArray):void{
  //   console.log('data send from navigation',this.showArray);
  //   this.emitShowData.emit(this.showArray);
  }


