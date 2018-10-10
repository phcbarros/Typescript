// Union Types token: string | number

// criando o alias!
type MeuToken = string |  number;

function processaToken(token: MeuToken) {
  
  let tokenTransformado;

  //Type Guard
  if(typeof(token) === 'string') 
    tokenTransformado = token;
  else 
    tokenTransformado = token.toFixed();

  return tokenTransformado.replace(/2/g, 'X');
}

const tokenProcessado1 = processaToken('1234');
const tokenProcessado2 = processaToken(1234);
