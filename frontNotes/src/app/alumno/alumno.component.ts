import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidacionService } from '../servicios/validacion.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  forma : FormGroup;

  constructor(private fb:FormBuilder, private validar:ValidacionService) {
    this.forma = this.fb.group({});
    this.crearForm();
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

  guardar(){
    console.log(this.forma);    
  }

}
