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
        if(lib.name.toLowerCase().startsWith(letter)){
            $('#timer').html(`
                <span>&#10004;</span>
                <p> Correct</p>
            `)
            $('body').prepend(`<div class="wrapper"></div>`);
            displayConfete()
        }else{
            console.log('enter a lib that begins with the letter you were provided')
        }
    }else{
        console.log('failed')
    }
}

function displayConfete(){
    for (var i = 0; i < 250; i++) {
        create(i);
    }
      
    function create(i) {
        var width = Math.random() * 40;
        var height = width * 0.4;
        var colourIdx = Math.ceil(Math.random() * 3);
        var colour = "red";
        switch(colourIdx) {
        case 1:
            colour = "yellow";
            break;
        case 2:
            colour = "blue";
            break;
        default:
            colour = "red";
        }
        $('<div class="confetti-'+i+' '+colour+'"></div>').css({
          "width" : width+"px",
          "height" : height+"px",
          "top" : -Math.random()*20+"%",
          "left" : Math.random()*100+"%",
          "opacity" : Math.random()+0.5,
          "transform" : "rotate("+Math.random()*360+"deg)"
        }).appendTo('.wrapper');  
        
        drop(i);
    }
      
    function drop(x) {
        $('.confetti-'+x).animate({
            top: "100%",
            left: "+="+Math.random()*15+"%"
        }, Math.random()*3000 + 3000, function() {
            reset(x);
        });
    }
      
    function reset(x) {
        $('.confetti-'+x).animate({
            "top" : -Math.random()*20+"%",
            "left" : "-="+Math.random()*15+"%"
        }, 0, function() {
            drop(x);             
        });
    }
}



//  UI LOGIC
$(document).ready(function(){

    $('#playButton').click(function(){
        // $('.wrapper').remove();
        startGame();
        $(this).attr('disabled','true')
    })

    $('#answerbutton').click(function(){
        const answer = $('#answerinput').val().toLowerCase();
        console.log(answer);
        const foundLib = findLibraryMatch(answer);
        determineCorrectness(foundLib);
    })












})


