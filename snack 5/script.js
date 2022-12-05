const zucchines = [
    {
        varieta: 'romana',
        lunghezza: 450,
        peso: 800
    },
    {
        varieta: 'romana',
        lunghezza: 250,
        peso: 400
    },
    {
        varieta: 'romana',
        lunghezza: 230,
        peso: 500
    },
    {
        varieta: 'romana',
        lunghezza: 200,
        peso: 300
    },
    {
        varieta: 'romana',
        lunghezza: 550,
        peso: 700
    },
    {
        varieta: 'romana',
        lunghezza: 650,
        peso: 800
    },
    {
        varieta: 'romana',
        lunghezza: 370,
        peso: 800
    },
    {
        varieta: 'romana',
        lunghezza: 400,
        peso: 400
    },
    {
        varieta: 'romana',
        lunghezza: 280,
        peso: 200
    },
    {
        varieta: 'romana',
        lunghezza: 320,
        peso: 500
    }
];

let pesoTotale =0;
let prezzoMedio = 0;
let lunghezzaTotale = 0;
let lunghezzaMedia = 0;

for (let i=0; i<zucchines.length;i++){
    const currentZucchina = zucchines[i];
    pesoTotale+=currentZucchina.peso;
    lunghezzaTotale+=currentZucchina.lunghezza;
    pesoMedio =(pesoTotale/zucchines.length);
    lunghezzaMedia = (lunghezzaTotale/zucchines.length);
}

console.log(pesoTotale/1000 + "kg");
console.log(pesoMedio + "g");
console.log(lunghezzaMedia + "mm");