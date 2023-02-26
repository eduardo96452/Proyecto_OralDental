import { UserService } from './../services/user.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(
        private auth: UserService,
        private router: Router
    ) { }

    // este es el método que usará angular para permitir el acceso o no a la ruta.
    // tal como puedes ver en la declaración de este método, el return puede ser un boleano, observable, promesa o UrlTree
    // en este caso, es boleano
    // tienes que saber que este método se ejecutará siempre antes de activar la ruta
    // en el que esté definido
    // si devuelve true se permite el acceso de lo contrario no
    canActivate(
        next: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
            if(!this.auth.logeado){ 
                alert('No tienes acceso!')
                this.router.navigate(['/login'])
        }
        return this.auth.logeado;
    }
}