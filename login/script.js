function logar(){
    var login = document.getElementById("email").value;
    var senha = document.getElementById("password").value;

    if(login == "admin" && senha == "admin"){
        alert("Sucesso!")
    } else {
        alert("Conta invalida.")
    }
}