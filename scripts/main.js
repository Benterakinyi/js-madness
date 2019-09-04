// Business Logic
function generateRandomLetter(){
    const number = Math.floor(Math.random()*Math.floor(26));
    return String.fromCharCode(65 + number);
}


const alphabetString = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
const alphabetArray = alphabetString.split(',');
const randomAlphabetArray = alphabetArray.sort(()=> Math.random() -0.5);

var limit = alphabetArray.length-1;
let letter;
function startGame(){
    letter = generateRandomLetter().toLowerCase();
    console.log(`letter: ${letter}`)
   
    for (let i=0;i<=limit;i++) {
        (function(ind) {
         
            setTimeout(function(){
                $('#unselected').text(`${randomAlphabetArray[i]}`)
                if(randomAlphabetArray[ind] == letter){
                    $('#random-generator').text(`${letter}`)
                     secondsTimer();
                     
                 }
            }, 100 + (100 * ind));
        })(i);
     
     }
    
}

// startGame();

function secondsTimer(){
    let time = 14;
    const myInterval = setInterval(function(){
        let sec = time --;
        $('#timer').text(sec);
        if(sec <= 1){
            $('#timer').text("Time's out")
            clearInterval(myInterval);
            $('#playButton').removeAttr('disabled');
            $('#random-generator').html(`
                <span id="unselected"></span>
            `);
        }

    },1000)
}

function findLibraryMatch(answer){
    return libraryArray.find((library)=>{
        return library.name.toLowerCase() == answer;
    })

}
function determineCorrectness(lib){
    if(lib != undefined){
        if(lib.name.startsWith(letter)){
            console.log("correct")
        }else{
            console.log('enter a lib that begins with the letter you were provided')
        }
    }else{
        console.log('failed')
    }
}
//  UI LOGIC
$(document).ready(function(){

    $('#playButton').click(function(){
        startGame();
        $(this).attr('disabled','true')
    })

    $('#answerbutton').click(function(){
        const answer = $('#answerinput').val().toLowerCase();
        console.log(answer);
        const foundLib = findLibraryMatch(answer)
        determineCorrectness(foundLib);
    })












})


