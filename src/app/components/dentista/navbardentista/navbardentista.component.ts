import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbardentista',
  templateUrl: './navbardentista.component.html',
  styleUrls: ['./navbardentista.component.css']
})
export class NavbardentistaComponent {
  constructor(
    private userService:UserService,
    private router:Router
  ) { }
  
  onClick(){
    this.userService.logout()
    .then(()=>{
      this.router.navigate(['/loginpaciente']);
    })
    .catch(error => console.log(error));
  }

  
}
