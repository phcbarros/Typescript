export function meuDecoratorDeClasse() {

  return function (construtor: any) {

    // guarda o constructor original, pois iremos definir um novo
    const construtorOriginal = construtor;

    // cria um novo constructor. Como ele pode receber nenhum ou mais parâmetros, usamos ...args: any[]
    const novo: any = function (...args: any[]) {
      console.log(`Criando uma instância com new: ${construtorOriginal.name}`);
      // cria a instância da classe quando for chamado 
      return new construtorOriginal(...args);
    }

    // importante! O prototype do novo constructor deve ser o mesmo do original
    novo.prototype = construtorOriginal.prototype;

    // retorna o novo constructor
    return novo;
  }
}