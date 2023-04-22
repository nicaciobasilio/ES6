const minhaFuncao = () =>  'Diz olá!';

const retornaUmCarro = () => ({
    modelo: 'Ka',
    fabricante: 'Ford'
})

console.log(minhaFuncao());
console.log(retornaUmCarro());

const carro = {
    velocidadeAtual: 40,
    acelerar: function(){
        this.velocidadeAtual += 10;
    },
    freiar: function(){
        this.velocidadeAtual -= 10;
    }
}
carro.acelerar();
carro.freiar();

console.log(carro.velocidadeAtual);