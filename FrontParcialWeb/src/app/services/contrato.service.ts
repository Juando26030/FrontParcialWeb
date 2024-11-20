import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contrato } from '../models/contrato.model';
import {environment} from "../environments/environment.development";

@Injectable({
  providedIn: 'root',
})
export class ContratoService{

  constructor(private http: HttpClient) {}

  // Crear un nuevo contrato
  crearContrato(contrato: Contrato): Observable<Contrato> {
    return this.http.post<Contrato>(environment.SERVER_URL, contrato);
  }

  // Obtener todos los contratos
  obtenerContratos(): Observable<Contrato[]> {
    return this.http.get<Contrato[]>(environment.SERVER_URL);
  }
}
