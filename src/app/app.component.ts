import { Component } from '@angular/core';
import {Show} from './show';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookMyShowPOC';
  fetchShowData:Show[];
  //imageNameNew:string;
  getShowFromChild(data)
  {
    console.log('data from parent',data);
    this.fetchShowData=data;
    //this.imageNameNew=data.imageName;
  }
}
