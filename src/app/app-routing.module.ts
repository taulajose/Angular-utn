import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'registro', component:RegistroComponent},
  {path: 'detalle', component: DetalleComponent},
  {path: 'login',component: LoginComponent},
  {path:'productos/:id',component:DetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
