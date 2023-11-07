const carroDoJoao = {
    modelo: "Fiesta",
    fabricante: "Ford",
    anoModelo: 2020,
    anoFabricacao: 2019,
    acelerar: function() {
        console.log("vruum");
    }
}

const carroDaMaria = {
    modelo: "Ka",
    fabricante: "Ford",
    anoModelo: 2021,
    anoFabricacao: 2020,
    acelerar: function() {
        console.log("vruum");
    }
}

function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log("acelerar");
    }
}

const carroDoJoao2 = new Carro("Fiesta", "Ford", 2020, 2019);
const carroDaMaria2 = new Carro("Ka", "Ford", 2021, 2010);

console.log(carroDoJoao2);
console.log(carroDaMaria2);

//-----------------------------------------------------------//

const nome = "Mahaw"
const idade = 30
const ehMaiorDeIdade = true
const conhecimentos = ["html", "css", "javascript"]

const pessoa = {
    nome: nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimentos: conhecimentos,
}

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof ehMaiorDeIdade);
console.log(typeof conhecimentos);
console.log(typeof pessoa);
console.log(typeof carroDaMaria2);

console.log(carroDaMaria2 instanceof Carro);
console.log(conhecimentos instanceof Array);

//-----------------------------------------------------------//

function exibeAtributo(nomeAtributo) {
    console.log(pessoa[nomeAtributo]);
}

exibeAtributo("nome");

pessoa["sobrenome"] = undefined;

Object.freeze(pessoa);

pessoa.nome = "João"

if (pessoa["sobrenome"]) {
    console.log("A pessoa tem um sobrenome");
}

if ("sobrenome" in pessoa) {
    console.log("Tem um sobrenome");
}

console.log(pessoa.nome);
console.log(pessoa["nome"]);

console.log(Object.keys(pessoa).length);
console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));