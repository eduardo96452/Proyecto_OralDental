import { DentistaService } from './../../../services/dentista.service';
import { UserService } from './../../../services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrodentista',
  templateUrl: './registrodentista.component.html',
  styleUrls: ['./registrodentista.component.css']
})
export class RegistrodentistaComponent {

  formulario: FormGroup;

  constructor(private dentistaSer: DentistaService, private userService:UserService, private router:Router){
    this.formulario = new FormGroup({
      nombre: new FormControl('',[Validators.required, Validators.minLength(2)]),
      apellido: new FormControl('', Validators.required),
      tiposangre: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      fechanacimiento: new FormControl('', Validators.required),
      tipoidentificacion: new FormControl('', Validators.required),
      numeroidentificacion: new FormControl('', Validators.required),
      especialidad: new FormControl('', Validators.required),
      tipo: new FormControl('', Validators.required),
    })
  }


  async onSubmit(){
    const response = await this.dentistaSer.addDentista(this.formulario.value);
    console.log(response);
    /*console.log(this.formulario.value)*/
    this.userService.register(this.formulario.value)
    .then(respuesta =>{
      console.log(respuesta);
      alert('Se ha registrado correctamente el odontologo!');
      this.router.navigate(['/bienvenida'])
    })
    .catch(error => console.log(error));
    /*console.log(this.formReg.value)*/
  }

  
}
