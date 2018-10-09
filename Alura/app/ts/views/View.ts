export abstract class View<T> {

  private _elemento: JQuery;
  private _escape: boolean;

  constructor(seletor: string, escape: boolean = true) {
    this._elemento = $(seletor);
    this._escape = escape;
  }

  update(modelo: T): void {
    let template = this.template(modelo);

    if(this._escape) 
      template = template.replace(/<script>[\s\S]*?<\/script>/g, '');

    this._elemento.html(template);
  }

  abstract template(modelo: T): string;

}
