import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formReg: FormGroup;

  constructor(
    private userService:UserService, private router:Router
  ){
    this.formReg=new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    })
  }

  onSubmit(){
    this.userService.login(this.formReg.value)
    .then(response =>{
      console.log(response);
      alert('Inicio de sesion correcto!');
      this.userService.logeado = true;
      this.router.navigate(['/bienvenida']);
    })
    .catch(error => console.log(error));
  }
}
