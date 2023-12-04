export class Empleado{
    _id?: number;
    Nombre: string;
    Apellido: string;
    DNI: number;
    Domicilio: string;
  
    constructor(Nombre: string, Apellido: string, DNI: number, Domicilio: string){
      this.Nombre = Nombre;
      this.Apellido = Apellido;
      this.DNI = DNI;
      this.Domicilio = Domicilio;
    }
  }