/*
Eventos de Mouse
function apertouMouse() {
	console.log("Apertou o mouse!");
}

function soltouMouse() {
	console.log("Soltou o mouse!");
}

function passouMouse() {
	console.log("Passou o mouse!");
}

function saiuMouse() {
	console.log("Saiu o mouse!");
}

function movelMouse() {
	console.log("Movel o mouse!");	
}

function clicou() {
	console.log("Clicou!!!");
}

function direito() {
	console.log("Botão direito");

	return false;
}

function cliqueDuplo() {
	console.log("Clicou 2 vezes !")
}
*/

/*
Evento de teclado
function apertouTecla(event) {
	console.log("Apertou a tecla: "+event.keyCode); 
}

function apertouTecla(event) {
	if (event.shiftKey == true && event.keyCode == 69) {
	console.log("Apertou Shift + E"); 
	}
}
*/

/*
Eventos de formulario
function mudouOpcao(objeto) {
	console.log("Selecionou: "+objeto.value);
}

function focou() {
	console.log("Focou no campo 1");
}

function saiuFoco() {
	console.log("Desfocou do campo 1");
}
*/
/* Script do joga da Bola
function addBola () {
	var bola = document.createElement("div");
	bola.setAttribute("class", "bola");
	var positionX = Math.floor(Math.random() * 500);
	var positionY = Math.floor(Math.random() * 400);
	var R     = Math.floor(Math.random() * 255);
	var G     = Math.floor(Math.random() * 255);
	var B     = Math.floor(Math.random() * 255);
	bola.setAttribute("style", "left:"+positionX+"px; top:"+positionY+"px; background-color:rgb("+R+","+G+","+B+")");
	bola.setAttribute("onclick", "estourar(this)");

	document.body.appendChild(bola);

}

function estourar(objeto) {
	document.body.removeChild(objeto);
}

function iniciar() {
	setInterval(addBola, 500);
}
*/

function relogio() {
	var relogio = document.createElement("div");
	relogio.setAttribute("class", "relogio");

	var data  = new Date();
	data      = document.createTextNode(data.getDate()+"/"+data.getMonth()+"/"+data.getFullYear()+" "+data.getHours()+":"+data.getMinutes()+":"+data.getSeconds());

	//Cor aletoria do relogio
	var R     = Math.floor(Math.random() * 255);
	var G     = Math.floor(Math.random() * 255);
	var B     = Math.floor(Math.random() * 255);
	relogio.setAttribute("style", "color:rgb("+R+","+G+","+B+")");

	relogio.appendChild(data);
	document.body.appendChild(relogio);

	setTimeout(function() {
		relogio.removeChild(data);
	},900);
}

function iniciar() {
	setInterval(relogio,1000);
}

