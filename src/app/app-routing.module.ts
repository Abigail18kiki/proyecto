import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { contactoComponent } from './pagers/contacto/contacto.component';


const routes: Routes = [
  {path:"contacto", component:contactoComponent},
  {path:"", component:contactoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
