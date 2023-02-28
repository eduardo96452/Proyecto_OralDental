import { Servicio } from './models/servicio';
import { AuthGuard } from './security/auth.guard';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//inicio de srvicios
import { CargarScriptsService } from './cargar-scripts.service';
//fin de servicios


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactosComponent } from './components/sinloguearse/contactos/contactos.component';
import { ServiciosComponent } from './components/servicio/servicios/servicios.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/sinloguearse/inicio/inicio.component';
import { NavbarComponent } from './components/sinloguearse/navbar/navbar.component';
import { PiedepaginaprincipalComponent } from './components/sinloguearse/piedepaginaprincipal/piedepaginaprincipal.component';
import { PaginadentistaComponent } from './components/paginadentista/paginadentista.component';
import { NavbarprincipalComponent } from './components/adminitrado/navbarprincipal/navbarprincipal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { PaginabienvenidaComponent } from './components/adminitrado/paginabienvenida/paginabienvenida.component';
import { RegistrodentistaComponent } from './components/adminitrado/registrodentista/registrodentista.component';
import { PiepaginaComponent } from './components/adminitrado/piepagina/piepagina.component';
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
import { ServicioitemComponent } from './components/servicio/servicioitem/servicioitem.component';
import { ServiciototalComponent } from './components/servicio/serviciototal/serviciototal.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PantallaloginComponent } from './components/pantallalogin/pantallalogin.component';
import { LogindentistaComponent } from './components/logindentista/logindentista.component';
import { LoginpacienteComponent } from './components/loginpaciente/loginpaciente.component';
import { BienvenidadentistaComponent } from './components/dentista/bienvenidadentista/bienvenidadentista.component';
import { ContactoprincipalComponent } from './components/sinloguearse/contactoprincipal/contactoprincipal.component';
import { ScheduleModule, RecurrenceEditorModule, DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { PerfildentistaComponent } from './components/dentista/perfildentista/perfildentista.component';
import { PerfiladminComponent } from './components/adminitrado/perfiladmin/perfiladmin.component';
import { CrearhistoriaclinicaComponent } from './components/dentista/crearhistoriaclinica/crearhistoriaclinica.component';
import { ListarhistoriaclinicaComponent } from './components/dentista/listarhistoriaclinica/listarhistoriaclinica.component';

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
    ServicioitemComponent,
    ServiciototalComponent,
    PantallaloginComponent,
    LogindentistaComponent,
    LoginpacienteComponent,
    BienvenidadentistaComponent,
    ContactoprincipalComponent,
    PerfildentistaComponent,
    PerfiladminComponent,
    CrearhistoriaclinicaComponent,
    ListarhistoriaclinicaComponent,
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    ScheduleModule, RecurrenceEditorModule,
  ],
  providers: [
    CargarScriptsService, 
    AuthGuard, 
    DayService, 
    WeekService, 
    WorkWeekService, 
    MonthService, 
    MonthAgendaService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
