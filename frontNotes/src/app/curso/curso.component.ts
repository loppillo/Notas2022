import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidacionService } from '../servicios/validacion.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  forma : FormGroup;

  constructor(private fb:FormBuilder, private validar:ValidacionService) {
    this.forma = this.fb.group({});
    this.crearForm();
   }

  ngOnInit(): void {
  }

  crearForm(){
    this.forma = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), this.validar.Validar]]
     
    })
  }

  guardar(){
    console.log(this.forma);    
  }
}
