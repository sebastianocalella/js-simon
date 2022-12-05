const auto ={
    marca:'opel',
    modello:'astra',
    alimentazione:'metano'
}

for(let key in auto){
    console.log(auto[key]);
}

const autos = [];

for (let i =0; i<10; i++){
    autos.push(auto);
}


console.log(autos);