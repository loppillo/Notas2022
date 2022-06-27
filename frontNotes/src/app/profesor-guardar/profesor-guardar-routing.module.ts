import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfesorGuardarComponent } from './profesor-guardar.component';

const routes: Routes = [{ path: '', component: ProfesorGuardarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesorGuardarRoutingModule { }
