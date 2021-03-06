import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AlumnoRoutingModule } from './alumno-routing.module';
import { AlumnoComponent } from './alumno.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AlumnoComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,
    AlumnoRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AlumnoModule { }
