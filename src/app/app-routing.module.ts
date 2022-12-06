import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEmpleadoComponent } from './components/crear-empleado/crear-empleado.component';
import { contactoComponent } from './pagers/contacto/contacto.component';
import { AdminComponent } from './pages/admin/admin.component';

import { EquipoComponent } from './pages/equipo/equipo.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'equipo', component: EquipoComponent },
  { path: 'iniciar-sesion', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'crear-empleado', component: CrearEmpleadoComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path:"contacto", component:contactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
