const tempo = document.getElementById('tempo');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');

let i=0;
tempo.innerHTML=i;
start.addEventListener('click', function(){
    if(i==0 || value == i){
        let myInterval = setInterval(function(){
            i++;
            tempo.innerHTML=i;
        },1)
        pause.addEventListener('click', function(){
            clearInterval(myInterval);
            value=i;
        });
        reset.addEventListener('click',function(){
            i=0;
            tempo.innerHTML=i;
            clearInterval(myInterval);
        });
    }
}); 


/* trin an alternative way but it didn't work


const tempo = document.getElementById('tempo');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');

let divValue = 0;

for (let i=1; i<7; i++){
    let square = document.createElement('div');
    square.classList.add('time-square','col');
    square.innerHTML = divValue;
    tempo.appendChild(square);
    square.classList.add("s-" + i);
}

const centiSeconds = document.querySelector('.s-6');
const deciSeconds = document.querySelector('.s-5');
const secondsUnit = document.querySelector('.s-4');
const decaSeconds = document.querySelector('.s-3');
const minutes = document.querySelector('.s-2');
const decaMinutes = document.querySelector('.s-1');

let centiSecondsValue = 0;
let deciSecondsValue = 0;
let secondsUnitValue = 0;
let decaSecondsValue = 0;
let minutesValue = 0;
let decaMinutesValue = 0;

let centiSecondsInterval;
let deciSecondsInterval;
let secondsUnitInterval;
let decaSecondsInterval;
let minutesInterval;
let decaMinutesInterval;



myTimer(centiSecondsInterval,centiSecondsValue,centiSeconds,9,10,start,pause,reset);
myTimer(deciSecondsInterval,deciSecondsValue,deciSeconds,9,100,start,pause,reset);
myTimer(secondsUnitInterval,secondsUnitValue,secondsUnit,9,1000,start,pause,reset);
myTimer(decaSecondsInterval,decaSecondsValue,decaSeconds,5,10*1000,start,pause,reset);
myTimer(minutesInterval,minutesValue,minutes,9,60*1000,start,pause,reset);
myTimer(decaMinutesInterval,decaMinutesValue,decaMinutes,5,60*10*1000,start,pause,reset);




tempo.classList.add('col-6');


FUNCTIONS

  function myTimer(intervalId, value, element, maxNumber, time,startElement, pauseElement, resetElement){
    
  let timerUp=false;
  let pauseValue = 0;
  
  startElement.addEventListener('click', function(){
    
    if(!timerUp){

      timerUp = true;
      
      intervalId = setInterval(() => {
        if(value < maxNumber){
          value ++;
          element.innerHTML= value;
        }else{
          value = 0;
          element.innerHTML= value;
        }
      }, time);
      
      pauseElement.addEventListener('click',function(){
        pauseValue+=value;

        clearInterval(intervalId);
        timerUp = false;
        return pauseValue;
      });
      
      resetElement.addEventListener('click',function(){
        clearInterval(intervalId);
        value = 0;
        element.innerHTML = 0;
        timerUp = false;
      });
    } 
  });
}

*/
