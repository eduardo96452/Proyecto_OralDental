import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formReg: FormGroup;

  constructor(
    private userService:UserService
  ){
    this.formReg=new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    })
  }

  onSubmit(){
    /*this.userService.register(this.formReg.value)
    .then(response =>{
      console.log(response);
    })
    .catch(error => console.log(error));*/
    this.userService.login(this.formReg.value)
    .then(response =>{
      console.log(response);
    })
    .catch(error => console.log(error));
  }
}
