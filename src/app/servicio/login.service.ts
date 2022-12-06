import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Usuarios } from '../usuarios';
import { map } from 'rxjs/operators'
import { FormGroup, NgForm } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLoged = false

  private coleccionUsuarios: AngularFirestoreCollection<Usuarios>

  constructor(private db:AngularFirestore, private cookieSevice:CookieService) {
    this.coleccionUsuarios = this.db.collection("usuarios");
  }

  getUsuarios(){
    return this.coleccionUsuarios.snapshotChanges().pipe(
        map((action: any[])=>action.map(a=>a.payload.doc.data()))
      )
  }

  login(form:FormGroup,usuariosCol:Usuarios[]){
    let texto = "No Inició sesión"
    if(form.valid){
      usuariosCol.forEach(
        usuario=>{
          if(form.value.username === usuario.username){
            if(form.value.password === usuario.password){
              this.isLoged = true
              this.cookieSevice.set("sesionIniciada",this.isLoged.toString())
              texto = "Inició Sesión"
            }
          }
        }
      )
      alert(texto)
    }
  }

  estaLogueado(){
    if(this.cookieSevice.get("sesionIniciada")==="true"){
      this.isLoged = true
    }
    return this.isLoged
  }


  logOut(){
    this.isLoged = false
    this.cookieSevice.set("sesionIniciada",this.isLoged.toString())
  }
}
