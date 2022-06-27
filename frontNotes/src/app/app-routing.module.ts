import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'cursos', loadChildren: () => import('./curso/curso.module').then(m => m.CursoModule) }, { path: 'profe', loadChildren: () => import('./profesor/profesor.module').then(m => m.ProfesorModule) }, { path: 'alumnos', loadChildren: () => import('./alumno/alumno.module').then(m => m.AlumnoModule) }, { path: 'guardarC', loadChildren: () => import('./curso-guardar/curso-guardar.module').then(m => m.CursoGuardarModule) }, { path: 'guardarP', loadChildren: () => import('./profesor-guardar/profesor-guardar.module').then(m => m.ProfesorGuardarModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
