const buttonElement = document.getElementById('my-button');

let conteggio = 0;

buttonElement.addEventListener('click', function(){
    if (conteggio < 10){
        conteggio++;
        buttonElement.innerHTML = "#" + conteggio;        
    }
    setTimeout(exit,1500,conteggio);
});

function exit(counter){
    counter = 0;
}