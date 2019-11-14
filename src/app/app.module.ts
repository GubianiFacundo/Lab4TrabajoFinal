import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { IncidenciasComponent } from './components/incidencias/incidencias.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IncidenciaComponent } from './components/incidencia/incidencia.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IncidenciasComponent,
    NavbarComponent,
    IncidenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DxDataGridModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);