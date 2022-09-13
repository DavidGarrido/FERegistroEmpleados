import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Salario } from '../interfaces/Salario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalarioService {

  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/salario';

  constructor(private http: HttpClient) { }

  addSalario(salario: Salario): Observable<Salario>{
    return this.http.post<Salario>(this.myApiUrl, salario);
  }
}
