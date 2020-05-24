import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VentaPasajeComponent } from './components/venta-pasaje/venta-pasaje.component';
import { MensajeriaComponent } from './components/mensajeria/mensajeria.component';
import { CursoComponent } from './components/curso/curso.component';
import { JuegoComponent } from './components/juego/juego.component';


const routes: Routes = [
  {path:'mensajeria',component:MensajeriaComponent},
  {path:'curso',component:CursoComponent},
  {path:'ventaPasaje',component:VentaPasajeComponent},
  {path:'juego',component:JuegoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
