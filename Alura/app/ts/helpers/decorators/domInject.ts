export function domInject(seletor: string) {
  
  return function(target: any, key: string) {
      
    let elemento: JQuery;

    const getter = function() {

      if(!elemento) {
        console.log(`Atribuindo o seletor ${seletor} a propriedade ${key}`);
        elemento = $(seletor);
      }

      return elemento;
    }

    Object.defineProperty(target, key, {
      get: getter
    });

  }
}