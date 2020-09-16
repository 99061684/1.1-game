
function keuze_checker() {
    keuze1 = prompt("geef hier jou keuze op", "schrijf hier de keuze...");
    if(keuze1 == "help de vrouw" || keuze1 == "1") {
        window.open("pagina_6.html","_self");
        console.log("pagina_6, help de vrouw")

    } else if(keuze1 == "je spaart de man" || keuze1 == "4"){
        window.open("pagina_7.html","_self");
        console.log("pagina_7, je spaart de man")

    } else if(keuze1 == "je dood de man" || keuze1 == "3"){
        window.open("pagina_8.html","_self");
        console.log("pagina_8, je dood de man")

    } else if(keuze1 == "dood de vrouw" || keuze1 == "2"){
        window.open("pagina_9.html","_self");
        console.log("pagina_9, dood de vrouw")

    } else if(keuze1 == "je gaat naar het oosten" || keuze1 == "5"){
        window.open("pagina_10.html","_self");
        console.log("pagina_10, je gaat naar het oosten")

    } else if(keuze1 == "je gaat naar het westen" || keuze1 == "6" || keuze1 == "8"){
        window.open("pagina_11.html","_self");
        console.log("pagina_11, je gaat naar het westen")

    } else if(keuze1 == "vecht met de boogschutter" || keuze1 == "7"){
        window.open("pagina_12.html","_self");
        console.log("pagina_12, vecht met de boogschutter")

    } else if(keuze1 == "beveel alle dorp bewoners om jou te gehoorzamen" || keuze1 == "9"){
        window.open("pagina_13.html","_self");
        console.log("pagina_13, beveel alle dorp bewoners om jou te gehoorzamen")
        
    } else if(keuze1 == "moord 1 voor 1 het dorp uit" || keuze1 == "10"){
        window.open("pagina_14.html","_self");
        console.log("pagina_14, moord 1 voor 1 het dorp uit")
        
    } else if(keuze1 == "probeer vriendelijk te praten met de dorpsbewoners" || keuze1 == "11"){
        window.open("pagina_15.html","_self");
        console.log("pagina_15, probeer vriendelijk te praten met de dorpsbewoners")
        
    } else if(keuze1 >= "12"){
        window.open("pagina_16.html","_self");
        console.log("pagina_16, easter egg 1. keuzes")
        
    } else if(keuze1 <= "0"){
        window.open("pagina_16.html","_self");
        console.log("pagina_16, easter egg 1. keuzes")
        
    } else {
        alert("je hebt niet goed een keuze opgegeven. mogelijke oorzaken: typfout of niet bestaande keuze.")
        console.log("iemand heeft niet goed een keuze opgegeven.")
    } 
    
}

function keuze_checker2() {
    keuze2 = parseInt(prompt("geef hier jou keuze op", "schrijf hier de keuze..."));
    if(keuze2 > 3 && keuze2 < 5 || keuze2 === 3) {
        window.open("pagina_17.html","_self");
        console.log("pagina_17, de eeuwige marteling")
        //eeuwige marteling

    } else if(keuze2 < 3){
        window.open("pagina_18.html","_self");
        console.log("pagina_18, het luxe leven")
  
    } //else if (keuze2 === 6){
        //window.open("pagina_16.html","_self");
        //console.log("pagina_16, easter egg 1. keuzes")
        
    } else {
        alert("je hebt niet goed een keuze opgegeven. mogelijke oorzaken: typfout of niet bestaande keuze.")
        console.log("iemand heeft niet goed een keuze opgegeven.")
    } 
    
}