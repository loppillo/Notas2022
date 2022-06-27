import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidacionService {

  constructor() { }

  Validar(control : FormControl):any{

    if(control.value?.toLowerCase()=== 'smith'){
      return {
        noSmith:true
      }
    }
    return null;

  }



}
