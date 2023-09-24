//Tabelle
let tableOne = document.getElementById("FrstTable");
let tableTwo = document.getElementById("scndTable");

//Frecce
let dx = document.getElementById("rightArrow");
let sx = document.getElementById("leftArrow");

//Box alimenti
let boxFocaccia = document.getElementById("focaccia");
let boxHotdog = document.getElementById("HotDog");
let boxFocacciaSalame = document.getElementById("focacciaS");
let boxFocacciaC = document.getElementById("BoxFocacciaC");
let boxFocacciaM = document.getElementById("BoxFocacciaM");
let boxCotoletta = document.getElementById("BoxCotoletta");


let alimenti = {
  focaccia : [document.getElementById("qntFocaccia"), 1.00],
  hotdog: [ document.getElementById("qntHotDog"), 1.70],
  focacciaSalame: [document.getElementById("qntFocacciaS"), 1.70],
  focacciaCotto: [document.getElementById("qntFocacciaC"), 1.70],
  focacciaMort: [document.getElementById("qntFocacciaM"), 1.70],
  cotoletta: [document.getElementById("qntCotoletta"), 2.00],
};

//Funzioni focaccia
boxFocaccia.onclick=function() {
  alimenti.focaccia[0].innerHTML++;
};

function lessFocaccia()
{
  alimenti.focaccia[0].innerHTML-=2;
}

//funzioni Hot-Dog
boxHotdog.onclick=function() {
  alimenti.hotdog[0].innerHTML++;
};

function lessHotDog()
{
  alimenti.hotdog[0].innerHTML-=2;
}

//Funzioni focaccia salame
boxFocacciaSalame.onclick=function(){
  alimenti.focacciaSalame[0].innerHTML++;
}
function lessFocacciaS()
{
  alimenti.focacciaSalame[0].innerHTML-=2;
}

//Funzioni focaccia cotto
boxFocacciaC.onclick=function() {
  alimenti.focacciaCotto[0].innerHTML++;
};

function lessFocacciaC()
{
  alimenti.focacciaCotto[0].innerHTML-=2;
}

//Funzioni focaccia mortadella
boxFocacciaM.onclick=function() {
  alimenti.focacciaMort[0].innerHTML++;
};

function lessFocacciaM()
{
  alimenti.focacciaMort[0].innerHTML-=2;
}

//Funzioni panino cotoletta
boxCotoletta.onclick=function() {
  alimenti.cotoletta[0].innerHTML++;
};

function lessCotoletta()
{
  alimenti.cotoletta[0].innerHTML-=2;
}

function ConfermaOrdine()
{
  document.getElementById("cover").style.visibility = "visible";
  document.getElementById("popup").style.visibility = "visible";
  let totale = 0;
  for(let [key, value] of Object.entries(alimenti))
  {
    totale += value[0]*value[1];
  }
  document.getElementById("costoTotale").innerHTML= totale;
}

function home()
{
  location.assign("index.html");
}

dx.onclick = function()
{

  tableOne.style.visibility = "hidden";
  tableTwo.style.visibility = "visible";
}

sx.onclick = function()
{

  tableOne.style.visibility = "visible";
  tableTwo.style.visibility = "hidden";
}