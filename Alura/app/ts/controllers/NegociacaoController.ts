import { Negociacao, Negociacoes, NegociacaoParcial } from '../models/index';
import { NegociacoesView, MensagemView } from '../views/index';
import { domInject, meuDecoratorDeClasse, throttle } from '../helpers/decorators/index';

@meuDecoratorDeClasse()
export class NegociacaoController {

  @domInject('#data')
  private _inputData: JQuery;
  @domInject('#valor')
  private _inputValor: JQuery;
  @domInject('#quantidade')
  private _inputQuantidade: JQuery;

  private _negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView('#negociacoesView');
  private _mensagemView = new MensagemView('#mensagemView');

  constructor() {
    this._negociacoesView.update(this._negociacoes);
  }

  @throttle()
  adicionar(): void {
    const data = new Date(this._inputData.val().replace(/-/g, ','));

    if (!this._ehDiaUtil(data)) {
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

  @throttle()
  importarDados(): void {
    fetch('http://localhost:8080/dados')
      .then((res: Response) => this._isOK(res))
      .then((res: Response) => res.json())
      .then((dados: NegociacaoParcial[]) => {
        dados
          .map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
          .forEach(negociacao => this._negociacoes.adicionar(negociacao));

        this._negociacoesView.update(this._negociacoes);
      })
      .catch(err => console.log(err));
  }

  private _isOK(res: Response): any {
    if (res.ok)
      return res
    else
      throw new Error(res.statusText);
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