import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEmpleadoComponent } from './components/agregar-empleado/agregar-empleado.component';
import { VerEmpleadoComponent } from './components/ver-empleado/ver-empleado.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';

const routes: Routes = [
  { path: '', redirectTo: 'listado-empleados', pathMatch: 'full'},
  { path: 'listado-empleados', component: ListaEmpleadosComponent},
  { path: 'agregar-empleado', component: AgregarEmpleadoComponent},
  { path: 'ver-empleado/:id', component: VerEmpleadoComponent},
  { path: '**', redirectTo: 'listado-empleados'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
