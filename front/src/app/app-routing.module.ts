import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './imagen/lista.component';
import { NuevaComponent } from './imagen/nueva.component';
import { DetalleComponent } from './imagen/detalle.component';
import { CambiarNombreComponent } from './imagen/cambiar-nombre/cambiar-nombre.component';
import { LoginComponent } from './imagen/login/login.component';

const routes: Routes = [
  {path: 'galeria', component: ListaComponent},
  {path: 'nueva', component: NuevaComponent},
  {path: 'detalle', component: DetalleComponent},
  {path: 'editar', component: CambiarNombreComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
