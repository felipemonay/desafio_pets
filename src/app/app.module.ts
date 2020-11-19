import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastNoAnimationModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './core/layout/nav-bar/nav-bar.component';
import { HomeComponent } from './modules/home/home.component';
import { PetModule } from './modules/pet/pet.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ToastNoAnimationModule.forRoot(),
    PetModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
