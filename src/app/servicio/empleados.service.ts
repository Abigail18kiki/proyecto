import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private firestore: AngularFirestore) { }

  agregarEmpleado(empleado:any): Promise<any> {
    //add retorna una promesa
    return this.firestore.collection('equipo').add(empleado);
  }

}
