import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoGuardarComponent } from './curso-guardar.component';

const routes: Routes = [{ path: '', component: CursoGuardarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoGuardarRoutingModule { }
