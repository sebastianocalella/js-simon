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

for(let key in student){
    console.log(key + ": " + student[key]);
}

const classe = [];

classe.push(studentOne,studentTwo);

console.log(classe);