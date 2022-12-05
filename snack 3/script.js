const studentOne ={
    name:'Adam',
    surname:'Adamander',
    age:22
}

const studentTwo ={
    name: 'Edgar',
    surname: 'Edgardgander',
    age: 33
}

for(let key in studentOne){
    console.log(key + ": " + studentOne[key]);
}

const classe = [];

classe.push(studentOne,studentTwo);

console.log(classe);