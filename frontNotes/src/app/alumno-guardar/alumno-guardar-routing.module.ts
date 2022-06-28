import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoGuardarComponent } from './alumno-guardar.component';

const routes: Routes = [{ path: '', component: AlumnoGuardarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnoGuardarRoutingModule { }
