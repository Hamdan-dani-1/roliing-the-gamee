const resetdice = document.querySelector('.reset');
const rolldice = document.querySelector('.roll-dicee');
const holddice = document.querySelector('.hold-dicee');
const image2 = document.querySelector('.images');
const p1score = document.querySelector('.player1score');
const p2score = document.querySelector('.player2score');
const currentscore1 = document.querySelector('.current1');
const currentscore2 = document.querySelector('.current2');
const hold1 = document.querySelector('.player1');
const hold2 = document.querySelector('.player2');
let player=1;
let currentscore=0;

const roldicee=function(){
    let val=Math.trunc(Math.random()*6)+1
    console.log(val);
    if(val!==1){
image2.classList.remove('hidden')
    image2.src=`dice-${val}.png`
    currentscore+=val
    if(player===1){
        currentscore1.textContent=currentscore
    }
    else{
        currentscore2.textContent=currentscore
    }   
}
else{
    player2();
}

};
const holddicee = function() {
    if (player === 1) {
        p1score.textContent = parseInt(p1score.textContent) + currentscore;
        currentscore1.textContent = 0;
    } else {
        p2score.textContent = parseInt(p2score.textContent) + currentscore;
        currentscore2.textContent = 0;
    }
    currentscore = 0;
    player2();
};
const reset=function(){
    currentscore1.textContent=0
    currentscore2.textContent=0
    p1score.textContent=0
    p2score.textContent=0
    hold1.classList.remove("bgc");
    hold2.classList.remove("bgc");

}

const player2=function(){
    if(player===1){
        player=2;
        currentscore1.textContent = 0;

        hold1.classList.remove("bgc");
        hold2.classList.add("bgc");
        currentscore2.textContent = parseInt(currentscore2.textContent)+currentscore
    }
    else{
        player=1;
        currentscore2.textContent = 0;
        
        hold2.classList.remove("bgc");
        hold1.classList.add("bgc");

    }
};

rolldice.addEventListener('click',roldicee)
holddice.addEventListener('click',holddicee)
resetdice.addEventListener('click',reset)