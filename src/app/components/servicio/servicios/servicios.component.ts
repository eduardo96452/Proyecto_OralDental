import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Servicio } from 'src/app/models/servicio';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit{

  servicio: Servicio[]=[];
  total:number=0;
  
  constructor(){}

  deleteItem(item:Servicio){
    this.servicio = this.servicio.filter(x => x.id != item.id);
    this.getTotal();
  };

  toggleItem(item:Servicio){
    this.getTotal();
  }


  ngOnInit(): void {
    this.servicio = [
      {
        id: 0,
        title: 'Extraciones dentales',
        price: 40,
        complete:false      
      },
      {
        id: 2,
        title: 'Procedimientos de obturación ',
        price: 25,
        complete:false      
      },
      {
        id: 3,
        title: 'Servicios de limpieza dental',
        price: 50,
        complete:false      
      },
      {
        id: 4,
        title: 'Ortodoncia',
        price: 300,
        complete:false      
      },
      {
        id: 5,
        title: 'Extracciones de muelas del juicio',
        price: 100,
        complete:false      
      },
    ];
    this.getTotal();

  }

  getTotal(){
    this.total = this.servicio
                  .filter(item => !item.complete)
                  .map(item => item.price * 1)
                  .reduce((acc, item) => acc += item, 0);
  }

}
