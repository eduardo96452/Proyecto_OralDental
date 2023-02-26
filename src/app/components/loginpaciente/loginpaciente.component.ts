import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-loginpaciente',
  templateUrl: './loginpaciente.component.html',
  styleUrls: ['./loginpaciente.component.css']
})
export class LoginpacienteComponent {
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
      this.router.navigate(['/']);
    })
    .catch(error => console.log(error));
  }
}
