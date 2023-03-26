function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm-password").value;

    if (nombre == "" || email == "" || password == "" || confirm_password == "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    if (password != confirm_password) {
        alert("Las contraseñas no coinciden.");
        return false;
    }

    return true;
}
