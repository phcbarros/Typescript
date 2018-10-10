import { Impressao } from './Impressao';
import { Igualavel } from './Igualavel';

export interface MeuObjeto<T> extends Impressao, Igualavel<T> {}
