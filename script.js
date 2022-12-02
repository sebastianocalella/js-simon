const buttonElement = document.getElementById('my-button');

let conteggio = 0;

buttonElement.addEventListener('click', function(){
    conteggio++;
    if (conteggio >= 10){
        setTimeout(exit,1500);
    }
    buttonElement.innerHTML = "#" + conteggio;
});