document.cookie= "document.cookie = nome_del_cookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";


//Tabelle
let tableOne = document.getElementById("FrstTable");
let tableTwo = document.getElementById("scndTable");

classe = document.cookie;
//Frecce
let dx = document.getElementById("rightArrow");
let sx = document.getElementById("leftArrow");

//Box alimenti
  //Prima tabella
let boxFocaccia = document.getElementById("focaccia");
let boxHotdog = document.getElementById("HotDog");
let boxFocacciaSalame = document.getElementById("focacciaS");
let boxFocacciaC = document.getElementById("BoxFocacciaC");
let boxFocacciaM = document.getElementById("BoxFocacciaM");
let boxCotoletta = document.getElementById("BoxCotoletta");
  //Seconda tabella
let boxFocacciaCrudo = document.getElementById("FocacciaCrudo");
let boxFCF = document.getElementById("FCF");
let boxFSF = document.getElementById("FSF");
let boxPS = document.getElementById("PS");
let boxPC = document.getElementById("PC");
let boxPM = document.getElementById("PM");


let alimenti = {
  //Prima tabella
  focaccia : [document.getElementById("qntFocaccia"), 1.00],
  hotdog: [ document.getElementById("qntHotDog"), 1.70],
  focacciaSalame: [document.getElementById("qntFocacciaS"), 1.70],
  focacciaCotto: [document.getElementById("qntFocacciaC"), 1.70],
  focacciaMort: [document.getElementById("qntFocacciaM"), 1.70],
  cotoletta: [document.getElementById("qntCotoletta"), 2.00],
  //Seconda tabella
  focacciaCrudo:[document.getElementById("qntFocacciaCrudo"), 2.00],
  focacciaCF: [document.getElementById("qntFCF"), 2.00],
  focacciaSF:[document.getElementById("qntFSF"), 2.00],
  paninoSalame: [document.getElementById("qntPS"), 1.40],
  paninoCotto: [document.getElementById("qntPC"), 1.70],
  paninoMortadella: [document.getElementById("qntPM"), 2.00],

};
//funzioni panino mortadella
boxPM.onclick=function(){
  alimenti.paninoMortadella[0].innerHTML++;
};

function lessPM()
{
  alimenti.paninoMortadella[0].innerHTML -= 2;
}
//funzioni Panino cotto
boxPC.onclick=function(){
  alimenti.paninoCotto[0].innerHTML++;
};

function lessPC()
{
  alimenti.paninoCotto[0].innerHTML -= 2;
}
//Funzioni panino e salame
boxPS.onclick=function()
{
  alimenti.paninoSalame[0].innerHTML++;
};

function lessPS()
{
  alimenti.paninoSalame[0].innerHTML-=2;
}
//funzioni focaccia salame e formaggio
boxFSF.onclick=function() {
  alimenti.focacciaSF[0].innerHTML++;
};

function lessFSF()
{
  alimenti.focacciaSF[0].innerHTML-=2;
}

//Funzioni Focaccia Cotto e formaggio
boxFCF.onclick=function() {
  alimenti.focacciaCF[0].innerHTML++;
};

function lessFCF()
{
  alimenti.focacciaCF[0].innerHTML-=2;
}
//Funzioni focaccia crudo
boxFocacciaCrudo.onclick=function() {
  alimenti.focacciaCrudo[0].innerHTML++;
};

function lessFC()
{
  alimenti.focacciaCrudo[0].innerHTML-=2;
}

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
  for(let key in alimenti)
  {
    totale += parseFloat(alimenti[key][0])*alimenti[key][1];
    document.cookie += key+";"+alimenti[key][0]+"\n";
  }

  console.log(document.cookie);
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