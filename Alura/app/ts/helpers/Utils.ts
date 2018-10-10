export function imprimir(...objetos: any[]): void {
  objetos.forEach(objeto => objeto.paraTexto());
}