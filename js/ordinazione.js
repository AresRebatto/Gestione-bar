document.addEventListener("DOMContentLoaded", function() {

  //Tabelle
  let tableOne = document.getElementById("FrstTable");
  let tableTwo = document.getElementById("ScndTable");
  let tableThree = document.getElementById("TrdTable")
  let tableN = 1;

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
    //Terza tabella
    

  //Funzione frecce
  dx.onclick = function()
  {
    if (tableN <= 3)
    {
      if(tableN != 3)
        tableN++;
      
        
      if(tableN == 2){  
        tableTwo.style.visibility = "visible";
        tableOne.style.visibility = "hidden";
      }
      if(tableN == 3){
        tableThree.style.visibility = "visible";
        tableTwo.style.visibility = "hidden";
      }
        
    }
    
    
  }

  sx.onclick = function()
  {

    if (tableN <= 3)
    {
      if(tableN != 1)
        tableN--;
      
      if(tableN == 1){  
        tableTwo.style.visibility = "hidden";
        tableOne.style.visibility = "visible";
      }
      if(tableN == 2){  
        tableTwo.style.visibility = "visible";
        tableThree.style.visibility = "hidden";
      }
      
        
    }
  }


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
    if(alimenti.paninoMortadella[0].textContent > 0)
      alimenti.paninoMortadella[0].innerHTML -= 2;
    else
    alimenti.paninoMortadella[0].innerHTML --;

  }
  //funzioni Panino cotto
  boxPC.onclick=function(){
    alimenti.paninoCotto[0].innerHTML++;
  };

  function lessPC()
  {
    if (alimenti.paninoCotto[0].textContent > 0)
      alimenti.paninoCotto[0].innerHTML -= 2;
    else 
      alimenti.paninoCotto[0].innerHTML--;
  }
  //Funzioni panino e salame
  boxPS.onclick=function()
  {
    alimenti.paninoSalame[0].innerHTML++;
  };

  function lessPS()
  {
    if(alimenti.paninoSalame[0].textContent > 0)
      alimenti.paninoSalame[0].innerHTML-=2;
    else
      alimenti.paninoSalame[0].innerHTML--;
  }
  //funzioni focaccia salame e formaggio
  boxFSF.onclick=function() {
    alimenti.focacciaSF[0].innerHTML++;
  };

  function lessFSF()
  {
    if(alimenti.focacciaSF[0].textContent > 0)
      alimenti.focacciaSF[0].innerHTML-=2;
    else
      alimenti.focacciaSF[0].innerHTML--;
  }

  //Funzioni Focaccia Cotto e formaggio
  boxFCF.onclick=function() {
    alimenti.focacciaCF[0].innerHTML++;
  };

  function lessFCF()
  {
    if(alimenti.focacciaCF[0].textContent > 0)
      alimenti.focacciaCF[0].innerHTML-=2;
    else 
      alimenti.focacciaCF[0].innerHTML--;
  }
  //Funzioni focaccia crudo
  boxFocacciaCrudo.onclick=function() {
    alimenti.focacciaCrudo[0].innerHTML++;
  };

  function lessFC()
  {
    if(alimenti.focacciaCrudo[0].textContent > 0)
      alimenti.focacciaCrudo[0].innerHTML-=2;
    else
    alimenti.focacciaCrudo[0].innerHTML--;
  }

  //Funzioni focaccia
  boxFocaccia.onclick=function() {
    alimenti.focaccia[0].innerHTML++;
  };

  function lessFocaccia()
  {
    if(alimenti.focaccia[0].textContent > 0)
      alimenti.focaccia[0].innerHTML-=2;
    else
      alimenti.focaccia[0].innerHTML--;
  }

  //funzioni Hot-Dog
  boxHotdog.onclick=function() {
    alimenti.hotdog[0].innerHTML++;
  };

  function lessHotDog()
  {
    if(alimenti.hotdog[0].textContent > 0)
      alimenti.hotdog[0].innerHTML-=2;
    else
      alimenti.hotdog[0].innerHTML--;
  }

  //Funzioni focaccia salame
  boxFocacciaSalame.onclick=function(){
    alimenti.focacciaSalame[0].innerHTML++;
  }
  function lessFocacciaS()
  {
    if(alimenti.focacciaSalame[0].textContent > 0)
      alimenti.focacciaSalame[0].innerHTML-=2;
    else
      alimenti.focacciaSalame[0].innerHTML--;
  }

  //Funzioni focaccia cotto
  boxFocacciaC.onclick=function() {
    alimenti.focacciaCotto[0].innerHTML++;
  };

  function lessFocacciaC()
  {
    if(alimenti.focacciaCotto[0].textContent > 0)
      alimenti.focacciaCotto[0].innerHTML-=2;
    else
      alimenti.focacciaCotto[0].innerHTML--;
  }

  //Funzioni focaccia mortadella
  boxFocacciaM.onclick=function() {
    alimenti.focacciaMort[0].innerHTML++;
  };

  function lessFocacciaM()
  {
    if(alimenti.focacciaMort[0].textContent > 0)
      alimenti.focacciaMort[0].innerHTML-=2;
    else
      alimenti.focacciaMort[0].innerHTML--;
  }

  //Funzioni panino cotoletta
  boxCotoletta.onclick=function() {
    alimenti.cotoletta[0].innerHTML++;
  };

  function lessCotoletta()
  {
    if(alimenti.cotoletta[0].textContent > 0)
      alimenti.cotoletta[0].innerHTML-=2;
    else
      alimenti.cotoletta[0].innerHTML--;
  }

  function ConfermaOrdine()
  {
    document.getElementById("cover").style.visibility = "visible";
    document.getElementById("popup").style.visibility = "visible";
    let totale = 0.0;
    let body = "NUOVO ORDINE %0A";
    //Probabilmente da rimuovere
    for (var chiave in alimenti) {
      
      if (alimenti.hasOwnProperty(chiave)) {
        totale += alimenti[chiave][1]*parseFloat(alimenti[chiave][0].textContent);
        if(alimenti[chiave][0].textContent>0)
        {        
          body+= chiave + ": ";
          body += alimenti[chiave][0].textContent+"%0A";
        }    
      }
    }
    document.getElementById("costoTotale").innerHTML= totale+"€";
    let sub = "Nuovo ordine da: " + document.cookie;
    console.log(sub);
    body += "%0APer un totale di " + totale + "€";
    window.location.href = "mailto:aresrebatt@gmail.com?subject="+sub+"&body="+body;
    document.cookie = "NoReturn";
    
  }

  function home()
  {
    location.assign("index.html");
  }

});