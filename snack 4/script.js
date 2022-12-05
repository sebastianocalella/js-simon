const autoBenzina ={
    marca:'opel',
    modello:'astra',
    alimentazione:'benzina'
}

for(let key in autoBenzina){
    console.log(autoBenzina[key]);
}

const autoDiesel ={
    marca:'opel',
    modello:'astra',
    alimentazione:'benzina'
}

for(let key in autoDiesel){
    console.log(autoDiesel[key]);
}

const autoAltro ={
    marca:'opel',
    modello:'astra',
    alimentazione:'altro'
}

for(let key in autoAltro){
    console.log(autoAltro[key]);
}



const autos = [];

for (let i =0; i<4; i++){
    autos.push(autoBenzina);
}

for (let i =0; i<3; i++){
    autos.push(autoDiesel);
}

for (let i =0; i<3; i++){
    autos.push(autoAltro);
}


console.log(autos);