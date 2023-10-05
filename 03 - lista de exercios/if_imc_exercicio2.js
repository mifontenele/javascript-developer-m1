/* Exercicio 2 
O IMC - Indice de Massa Corporal é um critperio da OMS para dar uma indicação 
sobre a condições de peso de uma pessoa adulta

Formula do IMC:
IMC = peso  / (altura * altura)

Elabore um algoritmo que dado o peso e a altura mostre a sua condição de acordo 
com a tabela abaixo:

- Abaixo de 18.5: Abaixo do peso;
- Entre 18.5 e 25: Peso normal;
- Entre 25 e 30: Acima do peso;
- Entre 30 e 40: Obeso;
- Acima de 40: Obsesidade Grave;
*/

let peso = 63; 
let altura = 1.60;
let imc = peso / (Math.pow(altura, 2));
// Math.pow é um método que eleva à potencias

console.log(imc.toFixed(2));

if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal');
} else if (imc >= 25 && imc < 30) {
    console.log('Acima do peso');
} else if (imc >= 30 && imc < 40) {
    console.log('Obeso');
} else {
    console.log('Obesidade grave');
}