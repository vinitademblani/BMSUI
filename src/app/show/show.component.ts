import { Component, OnInit, Input } from '@angular/core';
import { Show } from '../show';
import { CityService } from '../city.service';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
selected:number;
showObserver:Observable<Show[]>;
showArray:Show[];
constructor(private cityService:CityService) { }

  ngOnInit() {
    this.showObserver=this.cityService.getAllShowsByCityName(this.selected);
    this.showObserver.subscribe(
      (response)=>{
      this.showArray=response,
      console.log(response)},
    (error:any)=>{console.log(error)},
    ()=>{console.log('completed')}
    );
 
  }

}
