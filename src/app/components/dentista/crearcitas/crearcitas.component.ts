import { ScheduleModule, View } from '@syncfusion/ej2-angular-schedule';
import { Component } from '@angular/core';


@Component({
  selector: 'app-crearcitas',
  templateUrl: './crearcitas.component.html',
  styleUrls: ['./crearcitas.component.css']
})
export class CrearcitasComponent {
  title = 'my-scheduler-app';
  public setView: View = 'Month';
  public setDate: Date = new Date(2019, 1, 15);
}
