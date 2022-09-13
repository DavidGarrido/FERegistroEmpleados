import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Empleado } from '../interfaces/Empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/empleado';

  constructor(private http: HttpClient) { }

  getEmpleados(): Observable<Empleado[]>{
    return this.http.get<Empleado[]>(this.myApiUrl);
  }
  getEmpleado(id: number): Observable<Empleado>{
    return this.http.get<Empleado>(this.myApiUrl +'/'+ id);
  }
  addEmpleado(empleado: Empleado): Observable<Empleado>{
    return this.http.post<Empleado>(this.myApiUrl, empleado);
  }
}
