let meuMap = new Map();
meuMap.set("nome", "Nicacio");
meuMap.set("stack", "html, css, js");

console.log(meuMap);

const nome = meuMap.get("nome");

console.log(nome);

console.log(meuMap.size);

console.log(meuMap.has("nome"));

// meuMap.clear();

console.log(meuMap.size);

for (let chave of meuMap.keys()) {
    console.log(chave);
}

for (let chave of meuMap.values()) {
    console.log(chave);
}

for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

meuMap.delete("stack");

console.log(meuMap);

const cpfs = new Set();

cpfs.add("53296270795");
cpfs.add("01541466926");
cpfs.add("43265052656");
cpfs.add("91266578056");

console.log(cpfs);

cpfs.forEach((valor) => {
    console.log(valor);
})

const array = ['Nicacio', 'Bianca', 'Pedro', 'Pedro', 'Nicacio'];

const arrayComoSet = new Set([...array]);

console.log(arrayComoSet);

const arraySemItensDuplicados = [...arrayComoSet];
console.log(arraySemItensDuplicados);