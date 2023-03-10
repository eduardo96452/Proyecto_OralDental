import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from '@angular/fire/auth';
import { signOut } from '@firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth,
    private router: Router
    ) { }

  register({email, password}:any){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({email, password }: any){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logeado = true;

  logout(){
    return signOut(this.auth);
  }


  
}
