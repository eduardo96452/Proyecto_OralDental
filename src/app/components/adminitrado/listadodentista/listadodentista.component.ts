import { DentistaService } from './../../../services/dentista.service';
import { Component, OnInit } from '@angular/core';
import Dentista from 'src/app/interfaces/dentista.interface';

@Component({
  selector: 'app-listadodentista',
  templateUrl: './listadodentista.component.html',
  styleUrls: ['./listadodentista.component.css']
})
export class ListadodentistaComponent implements OnInit {

  dentistas: Dentista[];

  constructor( private dentistaservice: DentistaService ) {

    this.dentistas = [{
      nombre: 'nombre',
      apellido: 'apellido',
      tiposangre: 'tiposangre',
      fechanacimiento: '',
      tipoidentificacion: '',
      numeroidentificacion: '',
      especialidad: '',
      tipo: '',
    }];
  }

  ngOnInit(): void {
    this.dentistaservice.getDentista().subscribe(dentistas => {
      //console.log(dentistas);
      this.dentistas = dentistas;
    })
  }

  async onClickDelete(dentista: Dentista){
    const response = await this.dentistaservice.deleteDentista(dentista);
    console.log(response);
  }
}
