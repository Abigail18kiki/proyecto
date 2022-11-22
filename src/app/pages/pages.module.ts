import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosComponent } from './nosotros/nosotros.component';



@NgModule({
  declarations: [
    NosotrosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NosotrosComponent
  ]
})
export class PagesModule { }
