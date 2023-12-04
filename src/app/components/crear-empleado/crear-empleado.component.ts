import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent {
  empleadoForm: FormGroup;

  constructor(private fb: FormBuilder) { 
      this.empleadoForm = this.fb.group({
          Nombre: ['', Validators.required],
          Apellido: ['', Validators.required],
          DNI: ['', Validators.required],
          Domicilio: ['', Validators.required],
      })
  }

ngOnInit(): void {
}

agregarEmmpleado(){
  console.log(this.empleadoForm);
}

}
