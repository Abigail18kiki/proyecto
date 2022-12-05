import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';

//modules
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { PagesModule } from './pages/pages.module';
import { PrimeModule } from './prime/prime.module';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from './login.service';

//firebase
//se conecta con firestore
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { environment } from 'src/environments/environment';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    EquipoComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent
  ],
  // todos los modulos se declaran en imports
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatIconModule,
    PasswordModule,
    FormsModule,
    PagesModule,
    PrimeModule,
    ReactiveFormsModule,
    //importar configuracion de firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    InputTextModule,
    AngularFireAuthModule
  ],
  providers: [CookieService, CookieService],
  bootstrap: [AppComponent,LoginService]
})
export class AppModule { }
