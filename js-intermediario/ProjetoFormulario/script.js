function validar() {
	var valor = document.getElementById("numero").value;

	if (valor.length > 2) {
		alert("Voc� digitou um n�mero inv�lido!");
		return false;
	} else {
		return true;
	}
}