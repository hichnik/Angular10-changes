import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pagenotfound.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AuthComponent } from '@auth/auth.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressBarComponent } from '@shared/app-progress-bar/app-progress-bar.component';
import { MaxLengthDirective } from '@directives/max-length.directive';
import { UppercaseDirective } from '@directives/uppercase.directive';


@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    AboutusComponent,
    ContactusComponent,
    AuthComponent,
    HomeComponent,
    ProgressBarComponent,
    MaxLengthDirective,
    UppercaseDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
