import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule } from 'devextreme-angular';
import { DxButtonModule } from 'devextreme-angular';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { IncidenciasComponent } from './components/incidencias/incidencias.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IncidenciaComponent } from './components/incidencia/incidencia.component';
import { RegisterComponent } from './components/register/register.component';
import { IncidenciaEditComponent } from './components/incidencia-edit/incidencia-edit.component';
import { CuentasComponent } from './components/cuentas/cuentas.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IncidenciasComponent,
    NavbarComponent,
    IncidenciaComponent,
    RegisterComponent,
    IncidenciaEditComponent,
    CuentasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DxDataGridModule,
    DxButtonModule,
    AngularFontAwesomeModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);