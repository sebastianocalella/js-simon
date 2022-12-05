const zucchines = [
    {
        varieta: 'romana',
        lunghezza: 250,
        peso: 800
    },
    {
        varieta: 'romana',
        lunghezza: 250,
        peso: 400
    },
    {
        varieta: 'romana',
        lunghezza: 250,
        peso: 500
    },
    {
        varieta: 'romana',
        lunghezza: 250,
        peso: 300
    },
    {
        varieta: 'romana',
        lunghezza: 250,
        peso: 700
    },
    {
        varieta: 'romana',
        lunghezza: 250,
        peso: 800
    },
    {
        varieta: 'romana',
        lunghezza: 250,
        peso: 800
    },
    {
        varieta: 'romana',
        lunghezza: 250,
        peso: 400
    },
    {
        varieta: 'romana',
        lunghezza: 250,
        peso: 200
    },
    {
        varieta: 'romana',
        lunghezza: 250,
        peso: 500
    }
];

let pesoTotale =0;
let prezzoMedio = 0;
for (let i=0; i<zucchines.length;i++){
    const currentZucchina = zucchines[i];
    pesoTotale+=currentZucchina.peso;
    pesoMedio =(pesoTotale/zucchines.length);
}

console.log(pesoTotale/1000 + "kg");
console.log(pesoMedio + "g");