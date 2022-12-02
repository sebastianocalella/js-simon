const buttonElement = document.getElementById('my-button');

let conteggio = 0;
let gameOver = false;

buttonElement.addEventListener('click', function(){
    if(!gameOver){
        if (conteggio < 10){
            conteggio++;
            buttonElement.innerHTML = "#" + conteggio;        
        } else{
            gameOver=true;
            setTimeout(() => {
                gameOver=false;
                conteggio=0;
                buttonElement.innerHTML = "#" + conteggio; 
            },2000);
        }
    }
});

