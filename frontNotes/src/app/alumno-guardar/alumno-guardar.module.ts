import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlumnoGuardarRoutingModule } from './alumno-guardar-routing.module';
import { AlumnoGuardarComponent } from './alumno-guardar.component';


@NgModule({
  declarations: [
    AlumnoGuardarComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,
    AlumnoGuardarRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AlumnoGuardarModule { }
