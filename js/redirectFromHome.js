function ordina()
{
    location.assign("autenticazione.html");
}

function menu()
{
    location.assign("menu.html");
}

if(document.cookie == "NoReturn")
{
    window.addEventListener('popstate', function(event){
        window.location.href = "autenticazione.html";
    });
}