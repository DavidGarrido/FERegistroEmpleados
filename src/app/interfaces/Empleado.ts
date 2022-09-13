import { Cargo } from "./Cargo";
import { Salario } from "./Salario";

export interface Empleado{
    id?: number,
    nombre1: string,
    nombre2: string,
    apellido1: string,
    apellido2: string,
    IdCargo: number,
    IdSalario: number,
    cargo: object,
    salario: object
}