/* Funcao para trocar o texto

function trocaDiv(nome, idade) {
	var elemento = document.getElementById("area");
	var texto = prompt("Digite o seu sobrenome: ");

	elemento.innerHTML = nome+" "+texto+" tem "+idade+" anos";
}
*/

/* Funcao para adicionar na lista
function adicionarIngrediente () {
	var ing = document.getElementById("ingrediente").value;
	var listahtml = document.getElementById("lista").innerHTML;

	listahtml = listahtml + "<li>"+ing+"</li>";
	document.getElementById("lista").innerHTML = listahtml;
}
*/

/* funcao de multiplicacao
function multiplicar() {
	var numero1 = parseInt(document.getElementById("numero1").value)
	var numero2 = parseInt(document.getElementById("numero2").value)

	var resultado = numero1 * numero2;

	alert(resultado);
}	
*/

/* funcao com verificador if
function verificaMaior() {
	var numero = prompt("Digite um numero: ");

	if (numero > 10) {
		alert("O número é maior que 10");
	} else {
		alert("O número NÃO é maior do que 10");
	}
}
*/

// Loops
/* While
document.write("Iniciando o loop..."+"<br/>");

var x = 0;
while (x < 10) {
	document.write("Numero : " +x+"<br/>")
	x++;
}

document.write("Saindo o loop..."+"<br/>");
*/

/* for
for (x = 0; x<10; x++) {
	document.write("Numero: "+x+"<br/>")
}
*/

// Switch
/*
x = parseInt(prompt("Qual é o numero ? "));

switch(x) {
	case 0: 
		alert("X é 0");
		break;
	case 1:
		alert("X é 1");
		break;
	case 2:
		alert("X é 2");
		break;
	default:
		alert("X não e nenhum dos outros numeros");
		break;
}
*/

function verificar() {
	var n1 = document.getElementById("n1").innerHTML;
	var n2 = document.getElementById("n2").value;

	if (n1 == n2) {
		alert("Você acertou o número !")
	} else {
		alert("Você errou !")
	}
	resetar();
}

function resetar() {
	document.getElementById("n2").value = "";
	var random = Math.floor(Math.random() * 100);
	document.getElementById("n1").innerHTML = random;
}

