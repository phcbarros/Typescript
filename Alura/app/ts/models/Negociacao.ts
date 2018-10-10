export class Negociacao {

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
      ${this.data}
      ${this.quantidade}
      ${this.valor}
      ${this.volume}`);
  }
}
