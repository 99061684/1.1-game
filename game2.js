var checker = false;
var punten = 0;
var levens = 3;

const max = 5;
var random1 = Math.floor(Math.random() * Math.floor(max));
var random2 = Math.floor(Math.random() * Math.floor(max));

var antwoord = random1 * random2;

var max1 = max * max;
var random = Math.floor(Math.random() * Math.floor(max1));

document.getElementById("random_formule").innerHTML =
"de formule is: " + antwoord + " = " + random1 + " * " + random2;

document.getElementById("random_number").innerHTML =
"de number is: " + random;

document.getElementById("punten").innerHTML =
"aantal punten: " + punten;

document.getElementById("levens").innerHTML =
"aantal levens: " + levens;


function getformula(){
    const max = 5;
    checker = true;
    var random1 = Math.floor(Math.random() * Math.floor(max));
    var random2 = Math.floor(Math.random() * Math.floor(max));

    var antwoord = random1 * random2;

    var max1 = max * max;
    var random = Math.floor(Math.random() * Math.floor(max1));
    
    document.getElementById("random_formule").innerHTML =
    "de formule is: " + antwoord + " = " + random1 + " * " + random2;    

    document.getElementById("random_number").innerHTML =
    "de number is: " + random;

    alert(checker);
}
    

function checkbigger() {
    alert(checker);
    if(checker == true) { 
        alert(antwoord);
        alert(random);
        if(antwoord > random) {
            document.getElementById("checker").innerHTML =
            "antwoord is meer dan random";
            punten ++;
            document.getElementById("punten").innerHTML =
            "aantal punten: " + punten;

        } else if(antwoord < random) {
            document.getElementById("checker").innerHTML =
            "antwoord is minder dan random";
            alert("jou antwoord is fout")
            punten --;
            document.getElementById("punten").innerHTML =
            "aantal punten: " + punten;
            levens =- 1;
            document.getElementById("levens").innerHTML =
            "aantal levens: " + levens;
        }
    }
    
    
}

function checksmaller() {
    alert(checker);
    if(checker == true) {        
        alert(antwoord);
        alert(random);
        if(antwoord > random) {
            document.getElementById("checker").innerHTML =
            "antwoord is meer dan random";
            alert("jou antwoord is fout")
            punten --;
            document.getElementById("punten").innerHTML =
            "aantal punten: " + punten;
            levens =- 1;
            document.getElementById("levens").innerHTML =
            "aantal levens: " + levens;

        } else if(antwoord < random) {
            document.getElementById("checker").innerHTML =
            "antwoord is minder dan random";
            punten ++;  
            document.getElementById("punten").innerHTML =
            "aantal punten: " + punten;         
        }
    }
    
    
}


