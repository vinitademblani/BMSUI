import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
public signInForm:FormGroup;
  constructor() { }

  ngOnInit() {
    this.signInForm=new FormGroup({
      uname:new FormControl(),
      email:new FormControl(),
      contact:new FormControl(),

      addressGroup:new FormGroup({
        address:new FormControl(),
        city:new FormControl(),
        state:new FormControl()
      }),
      gender:new FormControl()

    });
      }
      onFormSumbit()
      {
        
      }

}
