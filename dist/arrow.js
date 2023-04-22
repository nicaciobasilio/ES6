"use strict";

var minhaFuncao = function minhaFuncao() {
  return 'Diz olá!';
};
var retornaUmCarro = function retornaUmCarro() {
  return {
    modelo: 'Ka',
    fabricante: 'Ford'
  };
};
console.log(minhaFuncao());
console.log(retornaUmCarro());
var carro = {
  velocidadeAtual: 40,
  acelerar: function acelerar() {
    this.velocidadeAtual += 10;
  },
  freiar: function freiar() {
    this.velocidadeAtual -= 10;
  }
};
carro.acelerar();
carro.freiar();
console.log(carro.velocidadeAtual);