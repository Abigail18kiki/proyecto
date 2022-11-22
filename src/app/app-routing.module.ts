import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EquipoComponent } from './pages/equipo/equipo.component';

const routes: Routes = [
  { path: 'equipo', component: EquipoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
