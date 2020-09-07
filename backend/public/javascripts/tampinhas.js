
var lugares = document.querySelectorAll(".lugar");

for (var i = 0; i < lugares.length; i++) {
    lugares[i].addEventListener('click', function () {
      lugarSelecionado = this;
      openForm();

      //event.preventDefault();
  });
}


//Form

let btnSaveBeerCap = document.querySelector("#btnSaveForm");
btnSaveBeerCap.addEventListener("click", saveForm);

let beerCapFormDiv = document.getElementById("beerCapFormDiv");


function openForm() {
  beerCapFormDiv.style.display = "block";
}

function closeForm() {
  beerCapFormDiv.style.display = "none";
}

function saveForm(event) {

  event.preventDefault();

  let form = document.querySelector("#beerCapForm");
  let beerCap = getBeerCap(form, lugarSelecionado.id);
   
	lugarSelecionado.style.backgroundColor = beerCap.color;

  alert("Salvo com sucesso");

  form.reset(); 
  closeForm();
}

function getBeerCap(form, idBeerCap) {

  var beerCap =  {
    id: idBeerCap,
    date: form.date.value,
    beerName: form.beerName.value,
    comments: form.comments.value,
    color: form.beerCapColor.value
  }

  return beerCap;
}


