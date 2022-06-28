import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Alumno } from '../Models/Alumno';
import { Curso } from '../Models/Curso';
import { AlumnoService } from '../servicios/alumno.service';
import { CursoService } from '../servicios/curso.service';
import { ValidacionService } from '../servicios/validacion.service';

@Component({
  selector: 'app-alumno-guardar',
  templateUrl: './alumno-guardar.component.html',
  styleUrls: ['./alumno-guardar.component.css']
})
export class AlumnoGuardarComponent implements OnInit {
  public cu: any;
  public alumno: Alumno;
  constructor(private validar: ValidacionService, private alumnoService: AlumnoService, private router: Router, private cursoService: CursoService) { }
  forma: FormGroup;

  ngOnInit(): void {

    this.crearForm();
    this.getCurso();
  }


  crearForm() {
    this.forma = new FormGroup({
      nombre1: new FormControl(''),
      nombre2: new FormControl(''),
      apellido1: new FormControl(''),
      apellido2: new FormControl(''),
      rut: new FormControl(''),
      id_curso: new FormControl(''),
    });
  }



  creates(data: any) {
    this.forma.reset();
    console.log(this.forma.value);
    const alumno_crear = {
      nombre1: data.nombre1,
      nombre2: data.nombre2,
      apellido1: data.apellido1,
      apellido2: data.apellido2,
      rut: data.rut

    };
    console.log('El registro está success', data);
    this.alumnoService.registrar(alumno_crear).subscribe(response => {
      console.log('Alumno creado');


    })



  }


  getCurso() {
    this.cursoService.getCursos().subscribe(cur => {
      this.cu = cur

    })

  }








}
