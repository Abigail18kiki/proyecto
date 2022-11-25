import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { contactoComponent } from './pagers/contacto/contacto.component';

import { EquipoComponent } from './pages/equipo/equipo.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'equipo', component: EquipoComponent },
  { path: '**', component: HomeComponent },
  { path: '', component: HomeComponent }
  {path:"contacto", component:contactoComponent},
  {path:"", component:contactoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
