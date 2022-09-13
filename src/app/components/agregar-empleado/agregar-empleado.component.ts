import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cargo } from 'src/app/interfaces/Cargo';
import { Empleado } from 'src/app/interfaces/Empleado';
import { Salario } from 'src/app/interfaces/Salario';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { SalarioService } from 'src/app/services/salario.service';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {

  form: FormGroup
  

  constructor(private fb: FormBuilder, private _empleadoService: EmpleadoService, private _salarioService: SalarioService, private router:Router) {
      this.form = this.fb.group({
        nombre1: ['', Validators.required],
        nombre2: ['', Validators.required],
        apellido1: ['', Validators.required],
        apellido2: ['', Validators.required],
        salario: [null, Validators.required],
        cargo: ['', Validators.required],
      })
   }

  ngOnInit(): void {
  }
  agregarSalario(){
    
  }
  agregarEmpleado(){
    const empleado: Empleado = {
      nombre1: this.form.value.nombre1,
      nombre2: this.form.value.nombre2,
      apellido1: this.form.value.apellido1,
      apellido2: this.form.value.apellido2,
      IdCargo: 1,
      IdSalario: 1,
      cargo: {
        nombre: this.form.value.cargo
      },
      salario: {
        valor: this.form.value.salario
      }
    }
    this._empleadoService.addEmpleado(empleado).subscribe(data => {
      console.log(data);
      this.router.navigate(['listado-empleados'])
    })
  }

}
