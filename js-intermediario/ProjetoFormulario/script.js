function validar() {
	var valor = document.getElementById("numero").value;

	if (valor.length > 2) {
		alert("Você digitou um número inválido!");
		return false;
	} else {
		return true;
	}
}