
function send()
{
    let classe = document.getElementById('classe').value;
    let password = document.getElementById('password').value;
    if(verifica(classe, password))
    {
        location.assign("prenotazione.html");
    }else
    {
        document.getElementById("send").animate([
            // keyframes
            { transform: 'translateX(4px)' },
            { transform: 'translateX(-4px)' }
          ], {
            // timing options
            duration: 200,
            iterations: 2
          });
    }

    
}

function verifica(classe, password)
{
    if(classe == "3H" && password == "1234")
    {
        document.cookie = classe;
        return true;
    }
    else return false;
}
