import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from "./home-page/home-page.component"
import { LoginPageComponent } from './login-page/login-page.component';
const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path: 'home-page', component: HomePageComponent},
  {path: 'login-page', component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
