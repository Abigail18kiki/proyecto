import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../login.service';
import { Usuarios } from '../../usuarios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //primeng password
  value1!: string;

  //coleccion de usuarios
  colUsuarios:Usuarios[] = []

  //se guardan los datos del formulario en array datosUsuarios
  datosUser = new FormGroup(
    {
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    }
  )

  constructor(private servicioUsuarios:LoginService,private router: Router) { }

  ngOnInit(): void {
    this.servicioUsuarios.getUsuarios().subscribe(
      usuarios => this.colUsuarios = usuarios
    )
  }

  // el usuario inicia en la aplicacion
  iniciaSesion(){
    this.servicioUsuarios.login(this.datosUser,this.colUsuarios)
    this.router.navigateByUrl("/").then(
      reDirectTo=>window.location.reload()
    )
  }

}
