// Rest

function somar() {
    let soma = 0;

    for(let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }
    return soma;
}

console.log(somar(10, 20, 50));

function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}

console.log(somarComRest(10, 20, 50));

// Spread
const numeros = [1,2,3,4];
console.log(...numeros);

const timesDeFutebolDoSp = ['santos', 'palmeiras', 'bragantino', 'são paulo'];
const timesDeFutebolDoRio = ['vasco', 'botafogo', 'flamengo', 'fluminense'];

// const timesDeFutebol = timesDeFutebolDoSp.concat(timesDeFutebolDoRio);
const timesDeFutebol = [...timesDeFutebolDoSp, ...timesDeFutebolDoRio];

console.log(timesDeFutebol);

const carroDaJulia = {
    modelo: 'gol',
    marca: 'vw',
    motor: 1.6
}

const carroDaAna = {
    ...carroDaJulia,
    motor: 1.8
}

console.log(carroDaAna);

// Desestrturação
// const motorDoCarroDaAna = carroDaAna.motot;
const { motor: motorDoCarroDaAna } = carroDaAna;
const { motor: motorDoCarroDaJulia } = carroDaJulia;

console.log(motorDoCarroDaAna);
console.log(motorDoCarroDaJulia);

const [item1, item2, item3, ...outrostimes] = timesDeFutebol;

console.log(item1);
console.log(item2);
console.log(item3);
console.log(outrostimes);