import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { Curso } from '../Models/Curso';
import { map, catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  url: string = `${environment.HOST}/curso`;
  constructor(private http:HttpClient) { }

  getCursos(){
    return this.http.get<Curso>(this.url);

  }

  registrar(data:any):Observable<any> {

    return this.http.post(this.url, data);
  }


  

delete(id: number): Observable<Curso> {
  return this.http.delete<Curso>(`${this.url}/${id}`, { headers: this.httpHeaders }).pipe(
    catchError((e: { error: { mensaje: any; error: any; }; }) => {
      console.error(e.error.mensaje);
      console.log("error")
  ;
      return throwError(e);
    })
  );
}
}
