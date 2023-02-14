import { Component } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'app-paginadentista',
  templateUrl: './paginadentista.component.html',
  styleUrls: ['./paginadentista.component.css']
})
export class PaginadentistaComponent {
  constructor( private _CargarScripts:CargarScriptsService ){
    _CargarScripts.Cargar(["barranavegar/barranavegar"]);
  }
  barra(): void {
    window.location.reload();
}
}
