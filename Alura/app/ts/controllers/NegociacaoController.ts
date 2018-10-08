class NegociacaoController {

  private _inputData: JQuery;
  private _inputValor: JQuery;
  private _inputQuantidade: JQuery;
  private _negociacoes = new Negociacoes();
  private _negociacoesView = new NegociaoesView('#negociacoesView');
  private _mensagemView = new MensagemView('#mensagemView');

  constructor() {
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');

    this._negociacoesView.update(this._negociacoes);
  }

  adicionar(event: Event) {
    event.preventDefault();

    const negociacao = new Negociacao(
      new Date(this._inputData.val().toString().replace(/-/g, ',')), 
      parseInt(this._inputQuantidade.val().toString()), 
      parseFloat(this._inputValor.val().toString())
    );

    this._negociacoes.adicionar(negociacao);
    this._negociacoesView.update(this._negociacoes);
    this._mensagemView.update('Negociação adicionada com sucesso!');
  }
}
