// 1 - Crie a função ligarDesligar, que ligue e desligue um motor de um carro.

function ligarDesligar(estado) {
  if (estado === 'ligado') {
    console.log('O motor está desligado');
    return 'desligado';
  }
  console.log('O motor está ligado');
  return 'ligado';
}
// console.log(ligarDesligar('desligado'))
// 2 - Crie a função circleArea, que calcule a área de um círculo.

function circleArea(raio) {
  if (typeof raio !== 'number') return 'O parâmetro radius deve ser um número';
  return `Essa é a área do círculo: ${((raio * raio) * 3.14)}`;
}
// console.log(circleArea(5));
// 3 - Crie a função longestWord, que receba uma frase como parâmetro e retorne a maior palavra da frase.


// Não modifique as linhas abaixo
module.exports = {
  ligarDesligar: typeof ligarDesligar === 'function' ? ligarDesligar : (() => {}),
  circleArea: typeof circleArea === 'function' ? circleArea : (() => {}),
  longestWord: typeof longestWord === 'function' ? longestWord : (() => {}),
};
