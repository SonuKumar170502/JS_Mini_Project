var timer=60;
var hitVal;
var score=0;

function makeBubble(){
var clutter="";
for(var i=1;i<=200;i++)
{
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector('#pbtm').innerHTML=clutter;
}


function runTimer()
{
    var timerVal = setInterval(function(){
    if(timer>0)
    {
        timer--;
        document.querySelector('#timerVal').textContent=timer;
    }
    else{
        var endGame = `<h2 style="font-size: 60px; color:red">Game Over</h2>`;
        var pbtm=document.querySelector('#pbtm');
        pbtm.classList.add('gameOver');
        pbtm.innerHTML=endGame;
        clearInterval(timerVal);
    }
    },1000);
}

function getHit()
{
    hitVal = Math.floor(Math.random()*10);
    document.querySelector('#hit').textContent=hitVal;
}

function increaseScore(){
    score+=10;
    document.querySelector('#score').textContent=score;
}
    document.querySelector('#pbtm').addEventListener("click",function(e){
        var clickedNum = Number(e.target.textContent);
        if(clickedNum===hitVal){
         increaseScore();
         makeBubble();
         getHit();
        }
     })

    


makeBubble();
runTimer();
getHit();



