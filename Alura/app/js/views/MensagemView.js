class MensagemView {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    update(modelo) {
        this._elemento.innerHTML = this._template(modelo);
    }
    _template(modelo) {
        return `<p class="alert alert-info">${modelo}</p>`;
    }
}
