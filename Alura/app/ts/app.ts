import { NegociacaoController } from './controllers/NegociacaoController';

const controller = new NegociacaoController();

$('.form').submit(controller.adicionar.bind(controller));
$('#botao-importar-dados').click(controller.importarDados.bind(controller));