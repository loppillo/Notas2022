import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'cursos', loadChildren: () => import('./curso/curso.module').then(m => m.CursoModule) }, { path: 'profe', loadChildren: () => import('./profesor/profesor.module').then(m => m.ProfesorModule) }, { path: 'alumnos', loadChildren: () => import('./alumno/alumno.module').then(m => m.AlumnoModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
