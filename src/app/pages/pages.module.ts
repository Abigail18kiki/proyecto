import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';



@NgModule({
  declarations: [
    HomeComponent,
    NosotrosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent,
    NosotrosComponent
  ]
})
export class PagesModule { }
