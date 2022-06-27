import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursoService } from '../servicios/curso.service';
import { ValidacionService } from '../servicios/validacion.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  cursos:any;


  constructor(private fb:FormBuilder, private validar:ValidacionService, private cursoService:CursoService) {
 
    this.getCurso();
   }

  ngOnInit(): void {
  }

  

  getCurso(){
    this.cursoService.getCursos().subscribe(cur=>{
      this.cursos=cur;
     
    })

    }

    eliminar(id:any){
      this.cursoService.delete(id);



    }


}
