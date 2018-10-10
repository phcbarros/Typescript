import { Impressao } from './Impressao';

export class Negociacao implements Impressao {

  constructor(
    readonly data: Date,
    readonly quantidade: number,
    readonly valor: number) { }

  get volume(): number {
    return this.quantidade * this.valor;
  }

  paraTexto(): void {
    console.log('Impressão');
    console.log(`
      Data: ${this.data}
      Quantidade: ${this.quantidade}
      Valor: ${this.valor}
      Volume: ${this.volume}`);
  }
}
