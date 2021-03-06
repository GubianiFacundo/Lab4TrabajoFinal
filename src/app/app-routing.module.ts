import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { IncidenciasComponent } from './components/incidencias/incidencias.component';
// import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { IncidenciaComponent } from './components/incidencia/incidencia.component';
import { IncidenciaEditComponent } from './components/incidencia-edit/incidencia-edit.component';
import { CuentasComponent } from './components/cuentas/cuentas.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'incidencias', component: IncidenciasComponent },
  // { path: 'navBar', component: NavBarComponent }
  { path: 'incidencia', component: IncidenciaComponent },
  { path: 'incidenciaEdit', component:  IncidenciaEditComponent },
  { path: 'cuentas', component:  CuentasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
