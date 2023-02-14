import { DentistaService } from './../../../services/dentista.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-registrodentista',
  templateUrl: './registrodentista.component.html',
  styleUrls: ['./registrodentista.component.css']
})
export class RegistrodentistaComponent {

  formulario: FormGroup;

  constructor(private dentistaSer: DentistaService){
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellido: new FormControl(),
      tiposangre: new FormControl()
    })
  }

  async onSubmit(){
    const response = await this.dentistaSer.addDentista(this.formulario.value);
    console.log(response);
  }
  
}
