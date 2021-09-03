//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("singInButton").addEventListener("click", login)
});

function login(){
    var email = document.getElementById('inputEmail').value;
    var password = document.getElementById('inputPassword').value;
    if(email != "" && password != "") {
        window.location.href="home.html";
    } else {
        alert ("campos vacios")
    }
}