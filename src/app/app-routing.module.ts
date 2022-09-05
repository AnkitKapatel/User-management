import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UsersComponent } from './components/users/users.component';
import { AuthGuard } from './shared/auth-guard.service';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full' },
  {path:'login', component : LoginComponent},
  {path:'users', component : UsersComponent, canActivate: [AuthGuard]},
  {path:'pagenotfound', component : PageNotFoundComponent},
  {path:'**', redirectTo:'pagenotfound', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
