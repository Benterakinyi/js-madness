// Business Logic
function generateRandomLetter(){
    const number = Math.floor(Math.random()*Math.floor(26));
    return String.fromCharCode(65 + number);
}

const letter = generateRandomLetter().toLowerCase();
console.log(`letter: ${letter}`)
const alphabetString = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
const alphabetArray = alphabetString.split(',');

var limit = alphabetArray.length-1;

function startGame(){
    for (let i=0;i<=limit;i++) {
        (function(ind) {
         
            setTimeout(function(){
                console.log(alphabetArray[i]);
     
                if(alphabetArray[ind] == letter){
                    // The letter we want
                    console.log(letter);
                     secondsTimer();
                     
                 }
            }, 100 + (500 * ind));
        })(i);
     
     }
     
}

// startGame();

function secondsTimer(){
    let time = 15;
    const myInterval = setInterval(function(){
        let sec = time --;
        console.log(sec)
        if(sec <= 1){
            console.log("stopped")
            clearInterval(myInterval);
        }

    },1000)
}

//  UI LOGIC
$(document).ready(function(){
    console.log('Hello world, jQuery works!')
})

