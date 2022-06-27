import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Curso } from '../Models/Curso';
import { CursoService } from '../servicios/curso.service';
import { ValidacionService } from '../servicios/validacion.service';

@Component({
  selector: 'app-curso-guardar',
  templateUrl: './curso-guardar.component.html',
  styleUrls: ['./curso-guardar.component.css']
})
export class CursoGuardarComponent implements OnInit {

  public curso: Curso;
  constructor(private validar: ValidacionService, private cursoService: CursoService, private router: Router) { }
  forma: FormGroup;

  ngOnInit(): void {

    this.crearForm();
  }


  crearForm() {
    this.forma = new FormGroup({
      nombre: new FormControl(''),

    });
  }



  creates(data: any) {
    this.forma.reset();
    console.log(this.forma.value);
    const curso_crear = {
      nombre: data.nombre

    };
    console.log('El registro está success', data);
    this.cursoService.registrar(curso_crear).subscribe(response => {
      console.log('Curso creado');


    })



  }

}
