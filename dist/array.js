"use strict";

var redesSociais = ['Facebook', 'Instagram', 'Twitter'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho um perfil no: ".concat(redesSociais[i]));
}
redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("#".concat(indice, " Eu tenho um perfil no ").concat(nomeDaRedeSocial));
});
var alunos = ['Gustado', 'Julia', 'Wagner'];
var alunos2 = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    curso: 'Frontend'
  };
});
console.log(alunos2);
var julia = alunos2.find(function (item) {
  return item.nome == 'Julia';
});
console.log(julia);
alunos2.push({
  nome: 'Lucio',
  curso: 'Backend'
});
var cursosAlunosFrontend = alunos2.every(function (item) {
  return item.curso === 'Frontend';
});
console.log(cursosAlunosFrontend);
var existeAlgumAlunodoBackend = alunos2.some(function (item) {
  return item.curso === 'Backend';
});
console.log(existeAlgumAlunodoBackend);
function filtraAlunoDoBackend(aluno) {
  return aluno.curso === 'Backend';
}
var alunosDoBackend = alunos2.filter(filtraAlunoDoBackend);
console.log(alunosDoBackend);
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);
var nomeDosAlunos = alunos2.reduce(function (acumulador, item) {
  acumulador += "".concat(item.nome, " ");
  return acumulador;
}, '');
console.log(nomeDosAlunos);