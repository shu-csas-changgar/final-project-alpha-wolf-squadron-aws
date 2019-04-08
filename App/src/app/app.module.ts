import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RootNavigationComponent } from './root-navigation/root-navigation.component';
import { Page3Component } from './page3/page3.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    Page1Component,
    Page2Component,
    PageNotFoundComponent,
    RootNavigationComponent,
    Page3Component
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
