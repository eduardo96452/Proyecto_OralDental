import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-logindentista',
  templateUrl: './logindentista.component.html',
  styleUrls: ['./logindentista.component.css']
})
export class LogindentistaComponent {
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
      this.router.navigate(['/bienvenidadentista']);
    })
    .catch(error => {
      console.log(error);
    });
  }
}
