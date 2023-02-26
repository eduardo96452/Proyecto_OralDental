import { getFirestore } from '@angular/fire/firestore';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-paginabienvenida',
  templateUrl: './paginabienvenida.component.html',
  styleUrls: ['./paginabienvenida.component.css']
})
export class PaginabienvenidaComponent {
  constructor(
    private userService:UserService,
    private router:Router,
    
  ) { }
  
  onClick(){
    this.userService.logout()
    .then(()=>{
      this.router.navigate(['/login']);
    })
    .catch(error => console.log(error));
  }
}
