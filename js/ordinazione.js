//Focaccia
let focacciaNum = document.getElementById("qntFocaccia");
let boxFocaccia = document.getElementById("focaccia");
let costoFocaccia = document.getElementById("FocacciaPrize");

//Hot-dog
let hotdogNum = document.getElementById("qntHotDog");
let boxHotdog = document.getElementById("HotDog");
let costoHotDog = document.getElementById("HotDogPrize");

//Funzioni focaccia
boxFocaccia.addEventListener('click', function() {
    // specify the action to take when the div is clicked
    focacciaNum.innerHTML++;
  });

function lessFocaccia()
{
   focacciaNum.innerHTML-= 2;
}

//funzioni Hot-Dog
boxHotdog.addEventListener('click', function() {
    // specify the action to take when the div is clicked
    hotdogNum.innerHTML++;
  });

function lessHotDog()
{
    hotdogNum.innerHTML-= 2;
}