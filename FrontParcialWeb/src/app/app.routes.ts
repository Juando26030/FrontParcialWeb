import { Routes } from '@angular/router';
import {ListarContratosComponent} from "./components/listar-contratos/listar-contratos.component";
import {InsertarContratoComponent} from "./components/insertar-contrato/insertar-contrato.component";

export const routes: Routes = [
  { path: 'insertar', component: InsertarContratoComponent },
  { path: 'listar', component: ListarContratosComponent },
  { path: '**', redirectTo: 'listar' },
];
