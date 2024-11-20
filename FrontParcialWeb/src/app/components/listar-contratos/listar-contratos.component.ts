import { Component, OnInit } from '@angular/core';
import {NgForOf} from "@angular/common";
import {Contrato} from "../../models/contrato.model";
import {ContratoService} from "../../services/contrato.service";

@Component({
  selector: 'app-listar-contratos',
  standalone: true,
  templateUrl: './listar-contratos.component.html',
  styleUrls: ['./listar-contratos.component.css'],
  imports: [
    NgForOf
  ]
})
export class ListarContratosComponent implements OnInit {
  contratos: Contrato[] = [];

  constructor(private contratoService: ContratoService) {}

  ngOnInit(): void {
    this.contratoService.obtenerContratos().subscribe({
      next: (data) => (this.contratos = data),
      error: () => console.error('Error al cargar contratos'),
    });
  }
}
