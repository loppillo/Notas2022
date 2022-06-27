import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Profesor } from '../Models/Profesor';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  url: string = `${environment.HOST}/profesor`;
  constructor(private http:HttpClient) { }

  getProfes(){
    return this.http.get<Profesor>(this.url);

  }

  registrar(profe: Profesor) {
    return this.http.post(this.url, profe);
  }

}
