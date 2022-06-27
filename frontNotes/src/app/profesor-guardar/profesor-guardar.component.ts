import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Profesor } from '../Models/Profesor';
import { ProfesorService } from '../servicios/profesor.service';
import { ValidacionService } from '../servicios/validacion.service';

@Component({
  selector: 'app-profesor-guardar',
  templateUrl: './profesor-guardar.component.html',
  styleUrls: ['./profesor-guardar.component.css']
})
export class ProfesorGuardarComponent implements OnInit {

  public profe: Profesor;
  constructor(private validar: ValidacionService, private profeService: ProfesorService, private router: Router) { }
  forma: FormGroup;
  ngOnInit(): void {
    this.crearForm();
  }

  crearForm() {
    this.forma = new FormGroup({
      nombreProfesor: new FormControl(''),
      apellidoProfesor:new FormControl(''),
      profesorJefe:new FormControl('')

    });
  }




  creates(data: any) {
    this.forma.reset();
    console.log(this.forma.value);
    const profe_crear = {
      nombreProfesor: data.nombreProfesor,
      apellidoProfesor:data.apellidoProfesor,
      profesorJefe:data.profesorJefe

    };
    console.log('El registro está success', data);
    this.profeService.registrar(profe_crear).subscribe(response => {
      console.log('Curso creado');


    })



  }







}
