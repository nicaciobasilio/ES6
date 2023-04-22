const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for(let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho um perfil no: ${redesSociais[i]}`);
}

redesSociais.forEach(function(nomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu tenho um perfil no ${nomeDaRedeSocial}`);
});

const alunos = ['Gustado', 'Julia', 'Wagner'];

const alunos2 = alunos.map(function(itemAtual) {
    return {
        nome: itemAtual,
        curso: 'Frontend'
    }
});

console.log(alunos2);

const julia = alunos2.find(function(item){
    return item.nome == 'Julia';
});

console.log(julia);

alunos2.push({
    nome: 'Lucio',
    curso: 'Backend'
});

const cursosAlunosFrontend = alunos2.every(function(item){
    return item.curso === 'Frontend';
});

console.log(cursosAlunosFrontend);

const existeAlgumAlunodoBackend = alunos2.some(function(item){
    return item.curso === 'Backend';
});

console.log(existeAlgumAlunodoBackend);

function filtraAlunoDoBackend(aluno) {
    return aluno.curso === 'Backend';
}

const alunosDoBackend = alunos2.filter(filtraAlunoDoBackend);

console.log(alunosDoBackend);

const nums = [10, 20, 30, 10];

const soma = nums.reduce(function(acumulador, itemAtual) {
    acumulador += itemAtual;
    return acumulador;
}, 0);

console.log(soma);

const nomeDosAlunos = alunos2.reduce(function(acumulador, item){
    acumulador += `${item.nome} `;
    return acumulador;
}, '');

console.log(nomeDosAlunos);