import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Profesor } from '../Models/Profesor';
import { ProfesorService } from '../servicios/profesor.service';
import { ValidacionService } from '../servicios/validacion.service';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {

  forma : FormGroup;
  profesor: any;

  constructor(private fb:FormBuilder, private validar:ValidacionService, private profesorService:ProfesorService) {
    this.forma = this.fb.group({});
    this.crearForm();
    this.getProfesor();
   }

  ngOnInit(): void {
  }

  crearForm(){
    this.forma = this.fb.group({
      nombreProfesor: ['', [Validators.required, Validators.minLength(3), this.validar.Validar]],
      apellidoProfesor:['', [Validators.required, Validators.minLength(3), this.validar.Validar]],
      profesorJefe:['', [Validators.required, Validators.minLength(3)]]
    })
  }

  getProfesor(){
    this.profesorService.getProfes().subscribe(pro=>{
      this.profesor=pro;
     
    })

    }



  
}
