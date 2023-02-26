import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarpaciente',
  templateUrl: './registrarpaciente.component.html',
  styleUrls: ['./registrarpaciente.component.css']
})
export class RegistrarpacienteComponent {

  formulario: FormGroup;

  constructor(private router:Router){
    this.formulario = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      tiposangre: new FormControl(''),
      fechanacimiento: new FormControl(''),
      sexo: new FormControl(''),
      pais: new FormControl(''),
      ciudad: new FormControl(''),
      direccion: new FormControl(''),
      tipoidentificacion: new FormControl(''),
      numeroidentificacion: new FormControl(0),
      telefono: new FormControl(''),
      tipo: new FormControl(''),
    })
  }
}
