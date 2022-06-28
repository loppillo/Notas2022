import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';
import { environment } from 'src/environments/environment';
import { Alumno } from '../Models/Alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  url: string = `${environment.HOST}/alumno`;
  constructor(private http:HttpClient) { }

  getAlumno(){
    return this.http.get<Alumno>(this.url);

  }

  registrar(data:any):Observable<any> {

    return this.http.post(this.url, data);
  }


  

delete(id: number): Observable<Alumno> {
  return this.http.delete<Alumno>(`${this.url}/${id}`, { headers: this.httpHeaders }).pipe(
    catchError((e: { error: { mensaje: any; error: any; }; }) => {
      console.error(e.error.mensaje);
      console.log("error")
  ;
      return throwError(e);
    })
  );
}
}
