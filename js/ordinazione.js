//Frecce
let dx = document.getElementById("rightArrow");
let sx = document.getElementById("leftArrow");

//Focaccia
let focacciaNum = document.getElementById("qntFocaccia");
let boxFocaccia = document.getElementById("focaccia");
let costoFocaccia = document.getElementById("FocacciaPrize");

//Hot-dog
let hotdogNum = document.getElementById("qntHotDog");
let boxHotdog = document.getElementById("HotDog");
let costoHotDog = document.getElementById("HotDogPrize");

//Focaccia con salame
let focacciaSalameNum = document.getElementById("qntFocacciaS");
let boxFocacciaSalame = document.getElementById("focacciaS");
let costoFocacciaSalame = document.getElementById("FocacciaSPrize");

//Funzioni frecce
dx.onclick=function(){
  //Ancora da scrivere le tabelle che poi andranno al posto
  //della main-table
}

sx.onclick=function(){
  //Ancora da scrivere le tabelle che poi andranno al posto
  //della main-table
}

//Funzioni focaccia
boxFocaccia.onclick=function() {
    focacciaNum.innerHTML++;
};

function lessFocaccia()
{
  focacciaNum.innerHTML-= 2;
}

//funzioni Hot-Dog
boxHotdog.onclick=function() {
    hotdogNum.innerHTML++;
};

function lessHotDog()
{
  hotdogNum.innerHTML-= 2;
}

//Funzioni focaccia salame
boxFocacciaSalame.onclick=function(){
  focacciaSalameNum.innerHTML++ ;
}
function lessFocacciaS()
{
  focacciaSalameNum.innerHTML-=2;
}