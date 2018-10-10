export function logarTempoDeExecucao(emSegundos: boolean = false) {

  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {

    const metodoOriginal = descriptor.value;

    descriptor.value = function (...args: any[]) {

      let divisor = 1;
      let unidade = 'milisegundos'
      if (emSegundos) {
        divisor = 1000;
        unidade = 'segundos';
      }

      console.log('------------------------------');
      console.log(`Os parâmetros passados para o método ${propertyKey}: ${JSON.stringify(args)}`);
      const t1 = performance.now();
      const retorno = metodoOriginal.apply(this, args);
      const t2 = performance.now();
      console.log(`O tempo de execução do método ${(t2 - t1)/divisor} ${unidade}.`)
      console.log(`O retorno do método ${propertyKey}: ${JSON.stringify(retorno)}`);
      console.log('------------------------------');
      return retorno;
    }
    
    return descriptor;
  }
}