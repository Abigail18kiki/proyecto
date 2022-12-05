import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginWithGoogleService {

  constructor(private auth:AngularFireAuth, private cookie: CookieService) { }

  // se crea nuevo objeto y se inicia sesion en ventana emergente (pop up)
  // metodo asincrono ya que se envia informacion a google y necesita deteerminado tiempo para recuperarlo
  async loginWithGoogle(){
    let referenceProvider = new firebase.auth.GoogleAuthProvider();
    await this.auth.signInWithPopup(referenceProvider);
    // se suscribe a authstate
    this.auth.authState.subscribe(
      async user=>{
        //obtiene idToken
        await user?.getIdToken()
        .then(
          token=>{
            //establece el token en la cookie
            this.cookie.set("idToken",token)
          }
        )
        .catch(
          error=>{
            console.error("Ocurrió un error: ",error)
          }
        )
      }
    )
  }

  //obtiene token del usuario del servicio de autenticacion
  getUser(){
    this.auth.authState.subscribe(
      async user=>{
        let token = await user?.getIdToken()
        console.log(token)
      }
    )
  }

  logOut(){
    // llama la funfion signout del servicio y elimina el token de la cookie
    this.auth.signOut().then(
      ()=>{
        this.cookie.delete("idToken");
      }
    )
  }
  
}