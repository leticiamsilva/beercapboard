var lugares = document.querySelectorAll(".lugar");
let icia = document;

function openForm() {
  document.getElementById("beerCapForm").style.display = "block";
}

function closeForm() {
	let icia = document.getElementById("beerCapColor").value;
	console.log("icia");
  document.getElementById("beerCapForm").style.display = "none";
}

function closeeForm() {
	var beerCapColor = document.getElementById("beerCapColor").value;

	icia.style.backgroundColor = beerCapColor;
}


function marcarLugar(lugar) {
	//event.preventDefault();
    alert("OI");
};


for (var i = 0; i < lugares.length; i++) {
    lugares[i].addEventListener('click', function () {
    	icia = this;
    	openForm();
    	//event.preventDefault();
	});
}


