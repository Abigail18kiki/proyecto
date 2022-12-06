import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpleadosService } from 'src/app/servicio/empleados.service';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent {
  crearEmpleado: FormGroup;
  submitted = false;

  //acceso al metodo empleadoService
  constructor(private fb: FormBuilder, private empleadosService: EmpleadosService) {
    this.crearEmpleado = this.fb.group({
      //los campos comienzan vacios, se requiere validacion (campos obligatorios)
      name: ['', Validators.required],
      dni: ['', Validators.required],
      address: ['', Validators.required],
      number: ['', Validators.required],
    })
  }

  agregarEmpleado() {

    this.submitted = true;
    if (this.crearEmpleado.invalid) {
      return;
    }

    const empleado: any = {
      //rellena los campos con los ingresados arriba
      name: this.crearEmpleado.value.name,
      dni: this.crearEmpleado.value.dni,
      address: this.crearEmpleado.value.address,
      number: this.crearEmpleado.value.number
    }

    //recibe como parametro empleado y retorna una promesa
    this.empleadosService.agregarEmpleado(empleado).then(() => {
      console.log('empleado añadido de manera exitosa');
    }).catch(error => {
      console.log(error)
    })

  }

}
