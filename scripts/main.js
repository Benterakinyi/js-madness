
const librayarray = [
    {
        name: "next",
        fact: " is used for light-weight framework for static and server rendering applications,"

    },
    {
        name: "numeric",
        fact: "is  used for Numerical analysis in Javascript",
    },

    {
        name: "offline",
        fact: " used to automatically display online/offline indication to your users,"
    },

    {
        name: " ocanvas",
        fact: "this used for JavaScript library for object-based canvas drawing",

    },

    {
        name: "polmer",
        fact: " this would be the Leverage the future of the web platform today",

    },


    {
        name: "pace",
        fact: "Automatic add progress bar to the site",
    },

    {
        name: "q",
        fact: "A tool for making and composing asynchronous promises in JavaScript."

    },

    {
        name: "qtip2",
        fact: " this is Pretty powerful tooltips",
    },


    {
        name: "react",
        fact: " is javascript library for building user interface",

    },

    {
        name: "relay",
        fact: "Relay is a javaScript framework for building data-driven React applications."

    },

    {
        name: "string",
        fact: " this is used for extra JavaScript string methods",
    },

    {
        name: "spin",
        fact: "this is spinning activity indicator",

    },

    {
        name: "typed",
        fact: " this helps you create a typing animation on your web page",

    },
    {
        name: "tether",
        fact: "A posioning engine to make overlay and dropdown better",

    },

    {
        name: "uppy",
        fact: "The next open source file uploader for web browsers",

    },

    {
        name: "uaParser",
        fact: "Lightweight JavaScript-based User-Agent string parser,"
    },

    {
        name: "vide",
        fact: "Easy as helname",
    },
    {
        name: "video",
        fact: " this used for universal video embed",
    },

    {
        name: "wpaint",
        fact: " this is jquery paint plugin",
    },

    {
        name: "xeditable",
        fact: "This library allows you to create editable elements on your page",
    },

    {
        name: "yarn",
        fact: " this is used for fast, reliable, and secure dependency management",

    },

    {
        name: "yeoman",
        fact: "its good for set of tools for automating development workflow",

    },

    {
        name: "zip",
        fact: "this is javaScript library to zip and unzip files",
    },

    {
        name: "react native",
        fact: " this is  framework for building native apps with React",

    },


    {
        name: "bootstrap vue",
        fact: "BootstrapVue provides one of the most comprehensive implementations of Bootstrap 4 components and grid system for Vue.js and with extensive and automated WAI-ARIA accessibility markup",

    },


    {
        name:"zepto",
        fact:"Zepto is a minimalist JavaScript library for modern browsers with a largely jQuery-compatible API. If you use jQuery, you already know how to use Zepto",
        
    },

    {
        name:"rxjs",
        fact:" this is the Reactive Extensions for JavaScript",
        
    },

    {
        name:"openlayers",
        fact:"OpenLayers makes it easy to put a dynamic map in any web page. It can display map tiles, vector data and markers loaded from any source",
    },

    {
        name:"webpack",
        fact:"webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser",

        
    },

    
    {
        name:"Perfect Scrollbar",
        
        fact:" its tiny but perfect jQuery scrollbar plugin", 
    },

    ]


// Business Logic
function generateRandomLetter(){
    const number = Math.floor(Math.random()*Math.floor(26));
    return String.fromCharCode(65 + number);
}


const alphabetString = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
const alphabetArray = alphabetString.split(',');
const randomAlphabetArray = alphabetArray.sort(()=> Math.random() -0.5);

var limit = alphabetArray.length-1;

function startGame(){
    const letter = generateRandomLetter().toLowerCase();
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
    let time = 15;
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

//  UI LOGIC
$(document).ready(function(){
    console.log('Hello world, jQuery works!')

    $('#playButton').click(function(){
        startGame();
        $(this).attr('disabled','true')
    })
})


