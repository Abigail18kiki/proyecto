import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  equipo: Observable<any[]>;
  constructor(firestore: AngularFirestore){
    this.equipo = firestore.collection('equipo').valueChanges();
  }

}
