const tempo = document.getElementById('tempo');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');

let i=0;
let value = 0;

for (let i=1; i<6; i++){
    let square = document.createElement('div');
    square.classList.add('time-square','col');
    square.innerHTML = value;
    tempo.appendChild(square);
    square.classList.add("s-" + i);
}

const centiSeconds = document.querySelector('.s-5');
const deciSeconds = document.querySelector('.s-4');
const secondsUnit = document.querySelector('.s-3');
const decaSeconds = document.querySelector('.s-2');
const minutes = document.querySelector('.s-1');

let centiSecondsValue = 0;
let deciSecondsValue = 0;
let secondsUnitValue = 0;
let decaSecondsValue = 0;
let minutesValue = 0;

console.log(centiSeconds);
console.log(tempo);

start.addEventListener('click', function(){
    if(i==0 || value == i){
        let myInterval = setInterval(function(){
            if(i<9){
                i++;
                centiSeconds.innerHTML = i;
            } else{
                i=0;
                centiSeconds.innerHTML = i;
                if(deciSecondsValue<9){
                    deciSecondsValue++;
                    deciSeconds.innerHTML = deciSecondsValue;
                }else{
                    deciSecondsValue=0;
                    deciSeconds.innerHTML = deciSecondsValue;
                    if(secondsUnitValue<9){
                        secondsUnitValue++;
                        secondsUnit.innerHTML = secondsUnitValue;
                    }else{
                        secondsUnitValue = 0;
                        secondsUnit.innerHTML = secondsUnitValue;
                        if(decaSecondsValue<5){
                            decaSecondsValue++;
                            decaSeconds.innerHTML = decaSecondsValue;
                        }else{
                            decaSecondsValue = 0;
                            decaSeconds.innerHTML = decaSecondsValue;
                            if(minutesValue<9){
                                minutesValue++;
                                minutes.innerHTML = minutesValue;
                            }
                        }
                    }
                }
            }
        },10)
        pause.addEventListener('click', function(){
            clearInterval(myInterval);
            value=i;
        });
        reset.addEventListener('click',function(){
            i=0;
            centiSeconds.innerHTML = centiSecondsValue = 0;
            deciSeconds.innerHTML = deciSecondsValue = 0;
            secondsUnit.innerHTML = secondsUnitValue = 0;
            decaSeconds.innerHTML = decaSecondsValue = 0;
            minutes.innerHTML = minutesValue = 0;
            clearInterval(myInterval);
        });
    }
});

tempo.classList.add('col-6');



