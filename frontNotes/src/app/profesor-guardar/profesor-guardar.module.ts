
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfesorGuardarRoutingModule } from './profesor-guardar-routing.module';
import { ProfesorGuardarComponent } from './profesor-guardar.component';


@NgModule({
  declarations: [
    ProfesorGuardarComponent
  ], 
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,
    ProfesorGuardarRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class ProfesorGuardarModule { }
