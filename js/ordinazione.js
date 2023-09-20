const costoFocacce = 1.70; //Anche HotDog
const costoFocaccia = 1.0;
const cotoletta = 2.00;

function ReturnPrize(objId)
{
  let strn = document.getElementById(objId).value;
  return strn.substring(0,2);
  // let chr = strn.split('');
  // return chr[0]+chr[1]+chr[2];
}

let tableOne = document.getElementById("FrstTable");
let tableTwo = document.getElementById("scndTable");
//Frecce
let dx = document.getElementById("rightArrow");
let sx = document.getElementById("leftArrow");

//Focaccia
let focacciaNum = document.getElementById("qntFocaccia").value;
let boxFocaccia = document.getElementById("focaccia");

let alimenti = {
  focaccia : [document.getElementById("qntFocaccia"), 1.00, ReturnPrize("qntFocaccia")]
};


//Hot-dog
let hotdogNum = document.getElementById("qntHotDog");
let boxHotdog = document.getElementById("HotDog");

//Focaccia con salame
let focacciaSalameNum = document.getElementById("qntFocacciaS");
let boxFocacciaSalame = document.getElementById("focacciaS");

//Focaccia cotto
let focacciaCottoNum = document.getElementById("qntFocacciaC");
let boxFocacciaC = document.getElementById("BoxFocacciaC");

//Focaccia mortadella
//Focaccia cotto
let focacciaMortNum = document.getElementById("qntFocacciaM");
let boxFocacciaM = document.getElementById("BoxFocacciaM");

//Panino cotoletta
let cotolettaNum = document.getElementById("qntCotoletta");
let boxCotoletta = document.getElementById("BoxCotoletta");


//Funzioni focaccia
boxFocaccia.onclick=function() {
  alimenti.focaccia[0].innerHTML++;
  console.log(alimenti.focaccia[2]);
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

//Funzioni focaccia cotto
boxFocacciaC.onclick=function() {
    focacciaCottoNum.innerHTML++;
};

function lessFocacciaC()
{
  focacciaCottoNum.innerHTML-= 2;
}

//Funzioni focaccia mortadella
boxFocacciaM.onclick=function() {
  focacciaMortNum.innerHTML++;
};

function lessFocacciaM()
{
  focacciaMortNum.innerHTML-= 2;
}

//Funzioni panino cotoletta
boxCotoletta.onclick=function() {
  cotolettaNum.innerHTML++;
};

function lessCotoletta()
{
  cotolettaNum.innerHTML-= 2;
}

function ConfermaOrdine()
{
  document.getElementById("cover").style.visibility = "visible";
  document.getElementById("popup").style.visibility = "visible";
  let totale = focacciaNum*costoFocaccia;
  document.getElementById("costoTotale").innerHTML= parseFloat(totale);
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