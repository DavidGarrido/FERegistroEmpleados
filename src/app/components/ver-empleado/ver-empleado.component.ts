import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empleado } from 'src/app/interfaces/Empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Observable } from 'rxjs';
import { Cargo } from 'src/app/interfaces/Cargo';

@Component({
  selector: 'app-ver-empleado',
  templateUrl: './ver-empleado.component.html',
  styleUrls: ['./ver-empleado.component.css']
})
export class VerEmpleadoComponent implements OnInit {
  id: number;
  empleado!: Empleado;

  empleado$!: Observable<Empleado>;

  constructor(private _empleadoService: EmpleadoService, private aRoute: ActivatedRoute) {
    this.id = +this.aRoute.snapshot.paramMap.get("id")!;
  }

  ngOnInit(): void {
    this.obtenerEmpleado()
    /*this.empleado$ = this._empleadoService.getEmpleado(this.id)*/
  }
  obtenerEmpleado() {
    this._empleadoService.getEmpleado(this.id).subscribe(data => {
      this.empleado = data;
      console.log(data)
    })
  }

}
