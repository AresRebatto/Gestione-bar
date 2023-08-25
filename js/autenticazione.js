
function send()
{
    let classe = document.getElementById('classe').value;
    let password = document.getElementById('password').value;
    if(verifica(classe, password))
    {
        location.assign("prenotazione.html");
    }

    
}

function verifica(classe, password)
{
    if(classe == "3H" && password == "1234")
        return true;
    else return false;
}
