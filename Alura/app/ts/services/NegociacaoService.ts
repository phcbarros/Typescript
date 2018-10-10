import { Negociacao, NegociacaoParcial } from '../models/index';

export class NegociacaoService {

  obterNegociacoes(handler: HandlerFunction): Promise<Negociacao[]> {
    return fetch('http://localhost:8080/dados')
      .then((res: Response) => handler(res))
      .then((res: Response) => res.json())
      .then((dados: NegociacaoParcial[]) => 
        dados
          .map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
        )
     .catch(err => {
       console.log(err);
       return err;
     });
  }

}

export interface HandlerFunction {

  (res: Response): Response;
}
