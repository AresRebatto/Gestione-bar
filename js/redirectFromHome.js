function ordina()
{
    location.assign("autenticazione.html");
}

if(document.cookie == "NoReturn")
{
    window.addEventListener('popstate', function(event){
        window.location.href = "autenticazione.html";
    });
}