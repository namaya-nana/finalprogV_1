import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { FormsModule } from "@angular/forms";
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';
import { ListarEmpleadoComponent } from './listar-empleado/listar-empleado.component';


@NgModule({
    declarations: [
        CrearEmpleadoComponent,
        ListarEmpleadoComponent,
      ],
    imports: [
      FormsModule,
      CommonModule
    ],
    exports: [
      CrearEmpleadoComponent,
      ListarEmpleadoComponent,
    ]
  })
  export class ComponentsModule { }
