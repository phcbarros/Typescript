import { Negociacao } from './Negociacao';
import { Impressao } from './Impressao';

export class Negociacoes implements Impressao {

  private _negociacoes: Negociacao[] = [];

  adicionar(negociacao: Negociacao): void {
   this._negociacoes.push(negociacao);
  }

  paraArray(): Negociacao[] {
    return ([] as Negociacao[]).concat(this._negociacoes);
  }

  paraTexto(): void {
    console.log('Impressão');
    console.log(`Negociações: ${JSON.stringify(this._negociacoes)}`);
  }
}
