import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CursoRoutingModule } from './curso-routing.module';
import { CursoComponent } from './curso.component';


@NgModule({
  declarations: [
    CursoComponent
    
  ],
  imports: [
    CommonModule,
    CursoRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CursoModule { }
