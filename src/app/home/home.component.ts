import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';
import { Observable } from 'rxjs';
import {City} from '../city';
import {Show} from '../show';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showArray:Show[];
  selected=null;
  showObserver:Observable<Show[]>;
  constructor(private cityService:CityService) { }

  ngOnInit() {
    this.showObserver=this.cityService.getAllShowsByCityName(this.selected);
    this.showObserver.subscribe(
      (response)=>{this.showArray=response,
      console.log(response)},
    (error:any)=>{console.log(error)},
    ()=>{console.log('completed')}
    );
  }

}
