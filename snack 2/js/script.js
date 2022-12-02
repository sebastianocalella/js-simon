const tempo = document.getElementById('tempo');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');

let i=0;
start.addEventListener('click', function(){
    if(i==0){
        setInterval(function(){
            i++;
            tempo.innerHTML=i;
        },1)
    }
});