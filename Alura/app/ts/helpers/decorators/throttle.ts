export function throttle(milisegundos: number = 500) {
  
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  
    const metodoOriginal = descriptor.value;
    let timer = 0;
    
    descriptor.value = function(...args: any[]) {
      if(event) event.preventDefault();
      console.log(`Reiniciado o tempo para espera para execução do método ${propertyKey}`);
      clearTimeout(timer);
      timer = setTimeout(() => metodoOriginal.apply(this, args), milisegundos);
    }

    return descriptor;
  }
}