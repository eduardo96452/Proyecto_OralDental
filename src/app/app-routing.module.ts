import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadodentistaComponent } from './components/adminitrado/listadodentista/listadodentista.component';
import { PaginabienvenidaComponent } from './components/adminitrado/paginabienvenida/paginabienvenida.component';
import { RegistrodentistaComponent } from './components/adminitrado/registrodentista/registrodentista.component';
import { ContactosComponent } from './components/sinloguearse/contactos/contactos.component';
import { InicioComponent } from './components/sinloguearse/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarprincipalComponent } from './components/adminitrado/navbarprincipal/navbarprincipal.component';
import { ServiciosComponent } from './components/servicio/servicios/servicios.component';
import { RegistrarpacienteComponent } from './components/dentista/registrarpaciente/registrarpaciente.component';
import { ListarpacienteComponent } from './components/dentista/listarpaciente/listarpaciente.component';
import { PantallaloginComponent } from './components/pantallalogin/pantallalogin.component';
import { LogindentistaComponent } from './components/logindentista/logindentista.component';
import { LoginpacienteComponent } from './components/loginpaciente/loginpaciente.component';
import { BienvenidadentistaComponent } from './components/dentista/bienvenidadentista/bienvenidadentista.component';
import { ContactoprincipalComponent } from './components/sinloguearse/contactoprincipal/contactoprincipal.component';

import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { AuthGuard } from './security/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: InicioComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'principal', component: NavbarprincipalComponent },
  { path: 'bienvenida', component: PaginabienvenidaComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
  { path: 'registrodoctor', component: RegistrodentistaComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
  { path: 'listadodoctor', component: ListadodentistaComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
  { path: 'registropaciente', component: RegistrarpacienteComponent },
  { path: 'listadopaciente', component: ListarpacienteComponent },
  { path: 'logearse', component: PantallaloginComponent },
  { path: 'loginpaciente', component: LoginpacienteComponent  },
  { path: 'logindentista', component: LogindentistaComponent },
  { path: 'bienvenidadentista', component: BienvenidadentistaComponent },
  
  //{ }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
