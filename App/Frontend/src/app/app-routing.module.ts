import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityPageComponent } from './city-page/city-page.component';
import { AddressPageComponent } from './address-page/address-page.component';
import { CountryPageComponent } from './country-page/country-page.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InventoryPageComponent } from './inventory-page/inventory-page.component';
import { LeasePageComponent } from './lease-page/lease-page.component';
import { OfficePageComponent } from './office-page/office-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RoomPageComponent } from './room-page/room-page.component';
import { TypePageComponent } from './type-page/type-page.component';
import { VendorPageComponent } from './vendor-page/vendor-page.component';
import { ViewPageComponent } from './view-page/view-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CrudPageComponent } from './crud-page/crud-page.component';
import { EquipmentPageComponent } from './equipment-page/equipment-page.component';

const routes: Routes = [
{path:'', redirectTo: '/login', pathMatch: 'full'},
{path:'home', component: HomePageComponent},
{path:'login', component: LoginPageComponent},
{path: 'crud', component: CrudPageComponent},
{path:'city', component: CityPageComponent},
{path:'address', component: AddressPageComponent},
{path:'country', component: CountryPageComponent},
{path:'employee', component: EmployeePageComponent},
{path:'equipment', component: EquipmentPageComponent},
{path:'inventory', component: InventoryPageComponent},
{path:'lease', component: LeasePageComponent},  
{path:'office', component:  OfficePageComponent},
{path:'room', component: RoomPageComponent},
{path:'type', component: TypePageComponent},
{path:'vendor', component: VendorPageComponent},
{path:'view', component: ViewPageComponent},
{path:'**', component: PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
