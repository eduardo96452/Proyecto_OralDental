import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-serviciototal',
  templateUrl: './serviciototal.component.html',
  styleUrls: ['./serviciototal.component.css']
})
export class ServiciototalComponent {

  @Input() total:number=0;
  @Input() mensaje:string='';

  constructor(){}
}
