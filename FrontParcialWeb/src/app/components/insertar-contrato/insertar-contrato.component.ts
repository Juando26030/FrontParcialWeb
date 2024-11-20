import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ContratoService} from "../../services/contrato.service";
import {Contrato} from "../../models/contrato.model";

@Component({
  selector: 'app-insertar-contrato',
  standalone: true,
  templateUrl: './insertar-contrato.component.html',
  styleUrls: ['./insertar-contrato.component.css'],
  imports: [ReactiveFormsModule, ReactiveFormsModule],
})
export class InsertarContratoComponent {
  contratoForm: FormGroup;
  mensaje: string = '';

  constructor(private fb: FormBuilder, private contratoService: ContratoService) {
    this.contratoForm = this.fb.group({
      identificador: ['', Validators.required],
      valor: [0, [Validators.required, Validators.min(1)]],
      nombreContratante: ['', Validators.required],
      documentoContratante: ['', Validators.required],
      nombreContratista: ['', Validators.required],
      documentoContratista: ['', Validators.required],
      fechaInicial: ['', Validators.required],
      fechaFinal: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.contratoForm.valid) {
      const contrato: Contrato = this.contratoForm.value;
      this.contratoService.crearContrato(contrato).subscribe({
        next: () => {
          this.mensaje = 'Contrato creado exitosamente';
          this.contratoForm.reset();
        },
        error: () => {
          this.mensaje = 'Error al crear el contrato';
        },
      });
    }
  }
}
