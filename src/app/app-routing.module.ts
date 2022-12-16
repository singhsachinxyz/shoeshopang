import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { CartComponent } from './pages/cart/cart.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ViewproductComponent } from './pages/viewproduct/viewproduct.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'contact', component:ContactComponent},
  {path:'shop', component:ShopComponent,canActivate:[AuthGuard]},
  {path:'cart', component:CartComponent,canActivate:[AuthGuard]},
  {path:'viewproduct/:id',component:ViewproductComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
