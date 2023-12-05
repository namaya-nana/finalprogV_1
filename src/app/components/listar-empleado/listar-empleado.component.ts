import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})
export class ListarEmpleadoComponent implements OnInit {
  empleados$: Observable<Empleado[]>;

  constructor(private empleadoService: EmpleadoService) {
    this.empleados$ = new Observable<Empleado[]>();
  }

  ngOnInit() {
    this.empleados$ = this.empleadoService.getEmpleados();
  }
}