import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlumnoService } from '../servicios/alumno.service';
import { ValidacionService } from '../servicios/validacion.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  forma : FormGroup;
  alumnos:any;

  constructor(private fb:FormBuilder, private validar:ValidacionService,private alumno:AlumnoService) {
    this.forma = this.fb.group({});
    this.crearForm();
    this.getAlumno();
   }

  ngOnInit(): void {
  }

  crearForm(){
    this.forma = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), this.validar.Validar]],
      paterno:['', [Validators.required, Validators.minLength(3), this.validar.Validar]],
      jefe:['', [Validators.required, Validators.minLength(3)]]
    })
  }

  getAlumno(){
    this.alumno.getAlumno().subscribe(al=>{
      this.alumnos=al;
     
    })

    }






}
