import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { Component } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-navbarprincipal',
  templateUrl: './navbarprincipal.component.html',
  styleUrls: ['./navbarprincipal.component.css']
})
export class NavbarprincipalComponent {

  constructor(
    private userService:UserService,
    private router:Router
  ) { }
  
  onClick(){
    this.userService.logout()
    .then(()=>{
      this.router.navigate(['/login']);
    })
    .catch(error => console.log(error));
  }
}
