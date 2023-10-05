/* 
Faça um algoritmo que calcule a média de 3 notas de um aluno em um semestre
Cacule e Imprima a sua média e a sua classificação conforme a tabela abaixo:
Media menor que 5: reprovação;
Média de 5 a 7: recuperação;
Média acima de 7: aprovação; */

let nota1 = 6.5;
let nota2 = 7;
let nota3 = 7;

let media = (nota1 + nota2 + nota3)/3

console.log(media.toFixed(2));

if (media < 5) {
    console.log('O(a) aluno(a) está reprovado(a)');
} else if (media >= 5 && media <= 7) {
    console.log(('O(a) aluno(a) está de recuperação'));
} else {
    console.log('O(a) aluno(a) foi aprovado(a)')
}