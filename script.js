const newGame=document.querySelector('.new-game');
const input=document.querySelector('input');
const perGuess=document.querySelector('.one')
const remGuess=document.querySelector('.two')
const submit=document.querySelector('.submit')
const row= document.querySelector('.row')

let number= Math.floor(Math.random()*101)
let remGuessNum=10;
let perGuessNum=0;
console.log(number)
let disable=true;

function newGame1(){
     remGuessNum=10;
     perGuessNum=0;
      disable=true;
     remGuess.textContent=remGuessNum;
     perGuess.textContent=perGuessNum;
     number= Math.floor(Math.random()*101);
     input.value='';
     row.textContent='';
     submit.classList.remove('disable')
     
     console.log(number)
}


submit.addEventListener('click',()=>{
    if(disable) {
    if(+input.value>number){
        row.textContent='Too hight! Try again'
    }else if(+input.value<number){
        row.textContent='Too low! Try again'
    }else if(+input.value===number){
        row.textContent='Congrats! You Win'
        finishGame()
    }
    remGuessNum--
    remGuess.textContent=remGuessNum;
    perGuessNum++
    perGuess.textContent=perGuessNum;
    if(remGuessNum===0){
       row.textContent='You lost!Try again'
       finishGame()
      
    }else{

    }
}
})
newGame.addEventListener('click',()=>{
    newGame1()
})

function finishGame() {
    submit.classList.add('disable')
    disable=false;
}

