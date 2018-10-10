import { Impressao } from '../models/index';

export function imprimir(...objetos: Impressao[]): void {
  objetos.forEach(objeto => objeto.paraTexto());
}