import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ReadPageComponent } from './read-page/read-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { DeletePageComponent } from './delete-page/delete-page.component';
import { UpdatePageComponent } from './update-page/update-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', redirectTo: '/login', pathMatch: 'full'},
  {path:'home', component: HomePageComponent},
  {path:'login', component: LoginPageComponent},
  {path:'search', component: SearchPageComponent},
  {path:'read', component: ReadPageComponent},
  {path:'create', component: CreatePageComponent},
  {path:'delete', component: DeletePageComponent},
  {path:'update', component: UpdatePageComponent},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
