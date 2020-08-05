import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from '@app/app.component';

// import { AuthComponent } from '@auth/auth.component';
import {QuicklinkModule, QuicklinkStrategy} from 'ngx-quicklink';
import { PagenotfoundComponent } from '@app/pagenotfound.component';
import { HomeComponent } from '@app/home/home.component';
import { AboutusComponent } from '@app/aboutus/aboutus.component';
import { ContactusComponent } from '@app/contactus/contactus.component';

const routes: Routes = [
  {path: 'about', component: AboutusComponent },
  {path: 'contact', component: ContactusComponent },
  {path: 'contact/:id', component: ContactusComponent },
  {path: '', component: HomeComponent, pathMatch: 'full' },
  {path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [
    QuicklinkModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: QuicklinkStrategy
    })],

  exports: [RouterModule]
})
export class AppRoutingModule { }
