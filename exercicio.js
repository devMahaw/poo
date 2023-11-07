function Boneco() {
    this.material = "Plástico";
    this.publico = "Infantil";
}

function Barbie() {
    this.cor = "Rosa";
    this.empresa = "Mattel";
    this.namorado = "Ken";

    Boneco.call(this);
}

function Maxsteel() {
    this.habilidade = "Poder";
    
    Boneco.call(this);
}

function BarbieDaMaria() {
    this.tipo = "Barbie Sereia"

    Barbie.call(this);
}

function BarbieDaJulia() {
    this.tipo = "Barbie Garçonete"

    Barbie.call(this);
}

function MaxsteelDoPaulo() {
    this.tipo = "Max Steel Tempestade de Areia"

    Maxsteel.call(this);
}

const boneco = new Boneco();
const barbie = new Barbie();
const maxsteel = new Maxsteel();
const barbieMaria = new BarbieDaMaria();
const barbieJulia = new BarbieDaJulia();
const maxsteelPaulo = new MaxsteelDoPaulo();

console.log(boneco);
console.log(barbie);
console.log(maxsteel);
console.log(barbieMaria);
console.log(barbieJulia);
console.log(maxsteelPaulo);