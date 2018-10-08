class NegociacaoController {

  private _inputData: HTMLInputElement;
  private _inputValor: HTMLInputElement;
  private _inputQuantidade: HTMLInputElement;

  constructor() {
    this._inputData = <HTMLInputElement>document.querySelector('#data');
    this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
    this._inputValor = <HTMLInputElement>document.querySelector('#valor');
  }

  adicionar(event: Event) {
    event.preventDefault();

    const negociacao = new Negociacao(
      new Date(this._inputData.value.replace(/-/g, ',')), 
      parseInt(this._inputQuantidade.value), 
      parseFloat(this._inputValor.value)
    );

    console.log(negociacao);
  }
}
