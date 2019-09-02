function generateRandomLetter(){
    const number = Math.floor(Math.random()*Math.floor(26));
    return String.fromCharCode(65 + number);
    
}

const letter = generateRandomLetter();
