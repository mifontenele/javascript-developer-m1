/* Exercício 3: Valor Pago de um Produto
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta 
e a escolha da condição de pagamento. Utilize os códigos da tabela a abaixo para definir a condição de pagamento
 escolhida e efetuar o cálculo adequado a ela:
Código - Condição de Pagamento:
1 - À Vista Débito: 10% desconto;
2 - À Vista PIX ou Dinheiro; 15% desconto;
3 - Em 2 vezes: preço da etiqueta;
4 - Acima de 2 vezes: juros de 10% sobre o preço normal
*/

let precoEtiqueta = 100;
let condPagto = 4;
// exercicio não pediu mas decidi declarar os descontos e juros para poder alterar mais facilmente caso deseje
let descDebito = 0.10;
let descDinheiroPix = 0.15;
let juros = 0.10;

if (condPagto === 1) {
    console.log(precoEtiqueta - (precoEtiqueta * descDebito))
} else if (condPagto === 2) {
    console.log(precoEtiqueta - (precoEtiqueta * descDinheiroPix))
} else if (condPagto === 3) {
    console.log(precoEtiqueta);
} else {
    console.log(precoEtiqueta + (precoEtiqueta * juros));
}
