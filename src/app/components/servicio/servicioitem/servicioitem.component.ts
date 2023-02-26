import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Servicio } from 'src/app/models/servicio';

@Component({
  selector: 'app-servicioitem',
  templateUrl: './servicioitem.component.html',
  styleUrls: ['./servicioitem.component.css']
})
export class ServicioitemComponent {

  @Input() item:Servicio = new Servicio();
  @Output() deleteItem: EventEmitter<Servicio> = new EventEmitter();
  @Output() toggleItem: EventEmitter<Servicio> = new EventEmitter();

  constructor(){}

  onDelete(item:Servicio){
    this.deleteItem.emit(item);
  }

  onToggle(item:Servicio){
    item.complete = !item.complete;
    this.toggleItem.emit(item);
  }
  
}
