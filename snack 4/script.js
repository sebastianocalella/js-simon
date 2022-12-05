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

const benzinaList = [];
const dieselList = [];
const altroList = [];


for (let i=0;i<autos.length;i++){
    const currentAuto = autos[i];
    if(currentAuto.alimentazione==='benzina'){
        benzinaList.push(currentAuto);
    } else if(currentAuto.alimentazione==='diesel'){
        dieselList.push(currentAuto);
    } else{
        altroList.push(currentAuto);
    }
    
}

console.log(benzinaList);