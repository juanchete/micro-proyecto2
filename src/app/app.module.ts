import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { JsonService } from './services/json.service';
import { BuyService } from './services/buy.service';
import { DetallesComponent } from './components/detalles/detalles.component';
import { PlantillaComponent } from './home/plantilla/plantilla.component';
import { BuyComponent } from './components/buy/buy.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DetallesComponent,
    PlantillaComponent,
    BuyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ JsonService, BuyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
