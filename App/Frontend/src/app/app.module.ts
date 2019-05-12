import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RootNavigationComponent } from './root-navigation/root-navigation.component';
import { ViewPageComponent } from './view-page/view-page.component';
import { AddressPageComponent } from './address-page/address-page.component';
import { CityPageComponent } from './city-page/city-page.component';
import { CountryPageComponent } from './country-page/country-page.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { InventoryPageComponent } from './inventory-page/inventory-page.component';
import { LeasePageComponent } from './lease-page/lease-page.component';
import { OfficePageComponent } from './office-page/office-page.component';
import { RoomPageComponent } from './room-page/room-page.component';
import { TypePageComponent } from './type-page/type-page.component';
import { VendorPageComponent } from './vendor-page/vendor-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CrudPageComponent } from './crud-page/crud-page.component';
import { EquipmentPageComponent } from './equipment-page/equipment-page.component';
import { ViewServiceService } from './service/view-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageNotFoundComponent,
    RootNavigationComponent,
    ViewPageComponent,
    AddressPageComponent,
    CityPageComponent,
    CountryPageComponent,
    EmployeePageComponent,
    InventoryPageComponent,
    LeasePageComponent,
    OfficePageComponent,
    RoomPageComponent,
    TypePageComponent,
    VendorPageComponent,
    LoginPageComponent,
    CrudPageComponent,
    EquipmentPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ViewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
