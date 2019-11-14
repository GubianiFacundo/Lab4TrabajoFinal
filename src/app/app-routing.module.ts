import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { IncidenciasComponent } from './components/incidencias/incidencias.component';
// import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { IncidenciaComponent } from './components/incidencia/incidencia.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'incidencias', component: IncidenciasComponent },
  // { path: 'navBar', component: NavBarComponent }
  { path: 'incidencia', component: IncidenciaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
