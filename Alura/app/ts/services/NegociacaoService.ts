import { Negociacao, NegociacaoParcial } from '../models/index';

export class NegociacaoService {

  async obterNegociacoes(handler: HandlerFunction): Promise<Negociacao[]> {
    // return fetch('http://localhost:8080/dadosa')
    //   .then((res: Response) => handler(res))
    //   .then((res: Response) => res.json())
    //   .then((dados: NegociacaoParcial[]) => 
    //     dados
    //       .map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
    //     )
    //  .catch(err => {
    //    console.log(err);
    //    throw new Error('Não foi possível importar as negociações');
    //  });

    try {
      const response = await fetch('http://localhost:8080/dados'); // chamada ajax
      const responseHandler = handler(response); // executa a função handler
      const dados =  await responseHandler.json(); // transforma o dado em JSON
      return dados.map((dado: NegociacaoParcial) => new Negociacao(new Date(), dado.vezes, dado.montante)); // tranforma o dado e devolve
    } catch (err) {
      console.log(err);
      throw new Error('Não foi possível importar as negociações');
    }
  }

}

export interface HandlerFunction {

  (res: Response): Response;
}
