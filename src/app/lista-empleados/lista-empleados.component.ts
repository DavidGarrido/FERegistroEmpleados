import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Empleado } from '../interfaces/Empleado';
import { EmpleadoService } from '../services/empleado.service';




@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  displayedColumns: string[] = ['nombre1', 'nombre2', 'apellido1', 'apellido2', 'cargo', 'salario'];
  dataSource = new MatTableDataSource<Empleado>();

  constructor(private _empleadoServices: EmpleadoService) { }
  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  obtenerEmpleados(){
    this._empleadoServices.getEmpleados().subscribe(data => {
      this.dataSource.data = data;
    }, error => {
      console.log(error)
    })
  }

}
