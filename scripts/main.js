// Business Logic
let timmerIsRunning;
function generateRandomLetter(){
    const number = Math.floor(Math.random()*Math.floor(26));
    return String.fromCharCode(65 + number);
}


const alphabetString = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
const alphabetArray = alphabetString.split(',');
const randomAlphabetArray = alphabetArray.sort(()=> Math.random() -0.5);

var limit = alphabetArray.length-1;
let letter;
function startGame(){
    letter = generateRandomLetter().toUpperCase();
    console.log(`letter: ${letter}`)
    for (let i=0;i<=limit;i++) {
        (function(ind) {
         
            setTimeout(function(){
                $('#unselected').text(`${randomAlphabetArray[i]}`)
                if(randomAlphabetArray[ind] == letter){
                    $('#random-generator').text(`${letter}`)
                    stopWatch.start();
                     
                 }
            }, 100 + (100 * ind));
        })(i);
     
     }
    
}

function StopWatch(){
    let duration = 14;
    let second;
    let myInterval;
    this.start = function(){
        myInterval = setInterval(()=>{
            second = duration--;
            $('#timer').text(`00:${second}`);
            if(second < 10){
                $('#timer').text(`00:0${second}`)
            }
            if(second < 1){
                $('#timer').hide()
                $('#timer-holder').append(`
                    <div id="response">
                        <p>You're out of Time!</p>
                    </div>
                `)

                clearInterval(myInterval);
                $('#playButton').removeAttr('disabled');
                $('#random-generator').html(`
                    <span id="unselected"></span>
                `);
                $('#answerbutton').attr('disabled','true')
                this.reset()
                displayPunishment()
            }

        },1000)
    }
    this.stop = function(){
        console.log(myInterval);
        clearInterval(myInterval);
    }
    this.reset = function(){
        duration = 14;
    }
}
const stopWatch = new StopWatch();

function findLibraryMatch(answer){
    return libraryArray.find((library)=>{
        return library.name.toUpperCase() == answer;
    })

}
function determineCorrectness(lib){
    if(lib != undefined){
        if(lib.name.toUpperCase().startsWith(letter)){

            $('#timer').hide()
            $('#timer-holder').append(`
                <div id="response">
                    <span >&#10004;</span>
                    <p style="font-weight: bold; color:#07d93f; font-size:42px">Congratulations!</p>
                </div>
            `)
            $('#page2').prepend(`<div class="wrapper"></div>`);
            displayConfete()
            stopWatch.reset()
            $('#playButton').removeAttr('disabled');
            displayFacts(lib.fact);
            
        }else{
            $('#timer').hide()
            $('#timer-holder').append(`
                <div id="response">
                    <span style="color:red; font-size:25px;">X</span>
                    <p style="font-weight: bold; color:#FF0000; font-size:15px">The answer MUST begin with the generated letter</p>
                </div>
            `)
            stopWatch.reset()
            $('#playButton').removeAttr('disabled'); 
            displayPunishment()
            
        }
    }else{
        $('#timer').hide()
        $('#timer-holder').append(`
            <div id="response">
                <span style="color:red; font-size:25px;">X</span>
                <p style="font-weight: bold; color:#FF0000; font-size:42px">FAILED!</p>
            </div>
        `)
        stopWatch.reset()
        $('#playButton').removeAttr('disabled');
        displayPunishment()
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

function displayFacts(message){
    $('#page2').prepend(`
        <div class="alert alert-warning alert-dismissible fade show fact-alert" role="alert">
            <strong><img class="bulb" src='Resources/bulb.png' alt="bulb"></img></>Did you Know?</strong>
            <hr>
            <span class=""lead>${message}</span>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    `)
}
function displayPunishment(){
    let index = Math.floor(Math.random() * 10); 
    const punishment = punishments[index];
    $('#page2').prepend(`
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong><img class="gavel" src='Resources/gavel.png' alt="bulb"></img></>Its time to receive your punishment!!</strong>
            <hr>
            <span class=""lead>${punishment}</span>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    `)
}



//  UI LOGIC
$(document).ready(function(){

    $('#playButton').click(function(){
        $('#random-generator').html(`
        <span id="unselected"></span>
    `);
        $('#response').remove();
        $('#timer').show().text(`00:15`)
        $(`.wrapper`).remove();
        $('#answerinput').val('');
        startGame();
        $('#answerbutton').removeAttr('disabled')
        $(this).attr('disabled','true')
    })

    $('#answerbutton').click(function(){
        const answer = $('#answerinput').val().toUpperCase();
        const foundLib = findLibraryMatch(answer);
        determineCorrectness(foundLib);
        $(this).attr('disabled','true')
        stopWatch.stop()
    })

})


