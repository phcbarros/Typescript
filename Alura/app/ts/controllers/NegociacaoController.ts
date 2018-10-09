import { Negociacao, Negociacoes } from '../models/index';
import { NegociacoesView, MensagemView } from '../views/index';

export class NegociacaoController {

  private _inputData: JQuery;
  private _inputValor: JQuery;
  private _inputQuantidade: JQuery;
  private _negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView('#negociacoesView');
  private _mensagemView = new MensagemView('#mensagemView');

  constructor() {
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');

    this._negociacoesView.update(this._negociacoes);
  }

  adicionar(event: Event) {
    event.preventDefault();

    const data =  new Date(this._inputData.val().replace(/-/g, ','));

    if(!this._ehDiaUtil(data)) {
      this._mensagemView.update('As negociações só podem ser executadas em dias úteis.');
      return;
    }

    const negociacao = new Negociacao(
      data, 
      parseInt(this._inputQuantidade.val()), 
      parseFloat(this._inputValor.val())
    );

    this._negociacoes.adicionar(negociacao);
    this._negociacoesView.update(this._negociacoes);
    this._mensagemView.update('Negociação adicionada com sucesso!');
  }

  private _ehDiaUtil(data: Date): boolean {
    const diaDaSemana = data.getDay();
    return diaDaSemana != DiasDaSemana.Sabado && diaDaSemana != DiasDaSemana.Domingo;
  }
}

enum DiasDaSemana {
  Domingo,
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado
}