import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RootNavigationComponent } from './root-navigation/root-navigation.component';
import { UpdatePageComponent } from './update-page/update-page.component';
import { DeletePageComponent } from './delete-page/delete-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { ReadPageComponent } from './read-page/read-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    PageNotFoundComponent,
    RootNavigationComponent,
    UpdatePageComponent,
    DeletePageComponent,
    SearchPageComponent,
    CreatePageComponent,
    ReadPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
