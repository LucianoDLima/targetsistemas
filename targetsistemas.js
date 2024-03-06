// Ordem
// 1
// 2
// 5
// 3
// 4

// 1)
let INDICE = 13;
let SOMA = 0;
let K = 0;

function somaValores() {
  while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
  }

  return SOMA;
}

console.log(`1) ${somaValores()}`); // Resultado: 91

// 2)

function verificaSequenciaFibonacci(numero) {
  let primeiro = 0;
  let segundo = 1;
  let proximo = primeiro + segundo;

  while (proximo <= numero) {
    if (proximo === numero) {
      return `${numero} pertence a sequência de Fibonacc.`;
    }

    primeiro = segundo;
    segundo = proximo;
    proximo = primeiro + segundo;
  }

  return `${numero} não pertence a sequência de Fibonacci.`;
}

const numero = 21;

console.log(`2) ${verificaSequenciaFibonacci(numero)}`);

// 5)

function inverterString(string) {
  let resultado = '';

  for (let i = string.length - 1; i >= 0; i--) {
      resultado += string[i];
  }

  return resultado;
}

const stringParaInverter = 'Me contrata, targetsistemas'
console.log(`5) ${inverterString(stringParaInverter)}`);

// 3)

// a) Sempre soma com + 2
// 1, 3, 5, 7, 9

// b) Cada número é o dobro do anterior
// 2, 4, 8, 16, 32, 64, 128

// c) Um número vezes ele mesmo dá o valor abaixo. Ex: 3*3 = 9, 6 * 6 = 36. Raiz quadrada
// 0, 1, 4, 9, 16, 25, 36, 64

// d) Vê se um número é par, se sim se o seu quadrado também é. Ex: 2*2 = 4, 3*3 = 9 (então não vai)
// 4, 16, 36, 64, 100

// e) A função do exercício 2, onde o primeiro número é somado com o segundo
// 1, 1, 2, 3, 5, 8, 13


// 4) 
// - Liga o primeiro interruptor e aguardar alguns minutos o suficiente para a lâmpada aquecer.
// - Desliga o interruptor 1 e liga o 2. 
// - Em seguida vá até a primeira sala. Se a lâmpada estiver desligada, veja se ela está quente. Se ela estiver fria e desligada, significa que a sala 1 está conectada ao terceiro interruptor.
// - Saia e vá para a segunda sala. Se a lâmpada estiver desligada, ela vai estar quente pois era a que você ligou e depois desligou, significa que a sala dois está conectada ao interruptor 1.
// - Assim sobra apenas a sala 2, que nem precisa ir, pois já sabe que ela está no interruptor que sobrou, sendo o 2.