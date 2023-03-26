function validar() {
	// Obtener los valores de los campos del formulario
	var nombre = document.getElementById("nombre").value;
	var apellidos = document.getElementById("apellidos").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var confirm_password = document.getElementById("confirm_password").value;

	// Validar que el campo de nombre no esté vacío
	if (nombre == "") {
		alert("Debe ingresar su nombre");
		return false;
	}

    // Validar que el campo de apellidos no esté vacío
	if (apellidos == "") {
		alert("Debe ingresar sus apellidos");
		return false;
	}

	// Validar que el campo de email contenga una dirección de correo válida
	if (!validarEmail(email)) {
		alert("Debe ingresar una dirección de correo válida");
		return false;
	}

	// Validar que el campo de contraseña tenga al menos 8 caracteres
	if (password.length < 8) {
		alert("La contraseña debe tener al menos 8 caracteres");
		return false;
	}

	// Validar que las contraseñas coincidan
	if (password != confirm_password) {
		alert("Las contraseñas no coinciden");
		return false;
	}

	// Si se pasaron todas las validaciones, se envía el formulario
	return true;
}

function validarEmail(email) {
	// Expresión regular para validar una dirección de correo electrónico
	var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	return emailRegex.test(email);
}
