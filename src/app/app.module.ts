import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//inicio de srvicios
import { CargarScriptsService } from './cargar-scripts.service';
//fin de servicios


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PiedepaginaprincipalComponent } from './components/piedepaginaprincipal/piedepaginaprincipal.component';
import { PaginadentistaComponent } from './components/paginadentista/paginadentista.component';
import { NavbarprincipalComponent } from './components/navbarprincipal/navbarprincipal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { PaginabienvenidaComponent } from './components/adminitrado/paginabienvenida/paginabienvenida.component';
import { RegistrodentistaComponent } from './components/adminitrado/registrodentista/registrodentista.component';
import { PiepaginaComponent } from './components/piepagina/piepagina.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ListadodentistaComponent } from './components/adminitrado/listadodentista/listadodentista.component';
import { NavbardentistaComponent } from './components/dentista/navbardentista/navbardentista.component';
import { RegistrarpacienteComponent } from './components/dentista/registrarpaciente/registrarpaciente.component';
import { ListarpacienteComponent } from './components/dentista/listarpaciente/listarpaciente.component';
import { CrearcitasComponent } from './components/dentista/crearcitas/crearcitas.component';
import { ListarcitasComponent } from './components/dentista/listarcitas/listarcitas.component';
import { provideAuth,getAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    ContactosComponent,
    ServiciosComponent,
    LoginComponent,
    InicioComponent,
    NavbarComponent,
    PiedepaginaprincipalComponent,
    PaginadentistaComponent,
    NavbarprincipalComponent,
    PaginabienvenidaComponent,
    RegistrodentistaComponent,
    PiepaginaComponent,
    ListadodentistaComponent,
    NavbardentistaComponent,
    RegistrarpacienteComponent,
    ListarpacienteComponent,
    CrearcitasComponent,
    ListarcitasComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'', component:InicioComponent},
      {path:'servicios', component:ServiciosComponent},
      {path:'contactos', component:ContactosComponent},
      {path:'login', component:LoginComponent},
      {path:'principal', component:NavbarprincipalComponent},
      {path:'bienvenida', component:PaginabienvenidaComponent},
      {path:'registropaciente', component:RegistrodentistaComponent},
      {path:'listadopaciente', component:ListadodentistaComponent},
      {path: '**', redirectTo:'/', pathMatch:'full'},
    ]),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
