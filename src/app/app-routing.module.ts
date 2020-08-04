import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from '@app/pagenotfound.component';
import { AuthComponent } from '@auth/auth.component';


const routes: Routes = [
  {path: '', redirectTo: '/app', pathMatch: 'full'},
  {path: '*', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
