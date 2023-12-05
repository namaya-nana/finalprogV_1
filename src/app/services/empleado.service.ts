import { Injectable } from '@angular/core';
import { AngularFireDatabase, SnapshotAction } from '@angular/fire/compat/database';

import { Observable } from 'rxjs';
import { Empleado } from '../models/empleado';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  
  private empleados$: Observable<Empleado[]>;

  constructor(private db: AngularFireDatabase) {
    this.empleados$ = this.db.list('/Empleado').valueChanges().pipe(
      map((data: any[]) => data.map(item => new Empleado(item.Nombre, item.Apellido, item.DNI, item.Domicilio)))
    );
  }

  getEmpleados(): Observable<Empleado[]> {
    return this.empleados$;
  }

    // Método para agregar un nuevo empleado a la base de datos
    agregarEmpleado(empleado: Empleado): Promise<void> {
       // Usar la función then() para resolver la Promise
       return this.db.list('/Empleado').push(empleado).then(() => {});
    } 
}
