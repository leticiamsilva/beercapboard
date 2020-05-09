
var lugares= document.querySelectorAll(".lugar");

function selecionarLugar(lugar) {
	//event.preventDefault();
	lugar.classList.add("selecionado-verde");
    alert("OI");
};

for (var i = 0; i < lugares.length; i++) {
    lugares[i].addEventListener('click', function () {
		//event.preventDefault();
		this.classList.add("verde");
  		alert("Lugar marcado");
	});
}

