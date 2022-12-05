import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { Usuarios } from '../../app/usuarios';
import { Router } from '@angular/router'
import { CookieService } from 'ngx-cookie-service';
import Swal from 'alerta';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  //logueado comienza en falso para que inicie sesion.
  private isLoged = false;

  //se declara la coleccion como privada
  private usuariosCollection: AngularFirestoreCollection<Usuarios>

  //conexion con bd
  constructor(private db: AngularFirestore, public router: Router, private cookieSevice: CookieService) {
    this.usuariosCollection = db.collection('usuarios');
  }

  //obtiene users de bd
  obtenerUsuarios() {
    /*map copia identica de algo y los transforma dependiendo la condicion
    snapshotchanges captura los cambios */
    return this.usuariosCollection.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())))
  }

  /*Comprueba que el nombre de usuario y la contraseña sean correctos, 
  de serlo inicia sesión  y redirige a admin */
  login(form: FormGroup, colUsuarios: Usuarios[]) {
    let text = "Ocurrió un error a la hora de ingresar"
    if (form.valid) {
      colUsuarios.forEach(
        usuario => {
          console.log("input: ", form.value.username)
          console.log("Bbdd: ", usuario.usuarios)

          if (form.value.username == usuario.usuarios) { //si username es igual al nombre de usuario que está en la base de datos
            if (form.value.password == usuario.contrasena) { // y si password es igual a la contraseña que está en la base de datos
              //se logea la persona y hay un ingreso correcto.
              this.isLoged = true
              this.cookieSevice.set("sesionIniciada", this.isLoged.toString())
              Swal.fire({ // alert correcto 
                position: 'top-end',
                icon: 'success',
                title: 'Se ha iniciado sesión correctamente.',
                showConfirmButton: false,
                timer: 1500
              })
              this.router.navigate(["/admin"]); //se redirige al usuario al admin
            }
          } if (form.value.password !== usuario.contrasena) {
            Swal.fire({ // alert de error
              icon: 'error',
              title: 'Oops...',
              text: 'La contraseña es incorrecta',
            })
          } if (form.value.username !== usuario.usuarios) {
            Swal.fire({ //alert de error
              icon: 'error',
              title: 'Oops...',
              text: 'El usuario es incorrecto',
            })
          } if (form.value.username.valid == " ") {
            if (form.value.password == " ") {
              Swal.fire({ //alert de error
                icon: 'error',
                title: 'Oops...',
                text: 'los campos están vacíos',
              })
            }
          }
        }
      )

    }
  }
  /**Comprueba si el usuario está logueado.  */
  estaLogueado() { //se retorna el login
    if (this.cookieSevice.get("sesionIniciada") === "true") {
      this.isLoged = true
    }

    return this.isLoged
  }


  /**
  Establece el valor de la cookie en falso y establece el valor de la variable isLoged en falso. */
  logOut() {
    this.isLoged = false
    this.cookieSevice.set("sesionIniciada", this.isLoged.toString())
  }
}
