export interface Contrato {
  id?: number;
  identificador: string;
  valor: number;
  nombreContratante: string;
  documentoContratante: string;
  nombreContratista: string;
  documentoContratista: string;
  fechaInicial: string;
  fechaFinal: string;
}
