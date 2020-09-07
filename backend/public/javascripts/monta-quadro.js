document.getElementById("quadro").appendChild(montaQuadro());


function montaQuadro()
{

  var quadroPreencher = document.createElement("table");
  quadroPreencher.setAttribute("id", "quadro-mario")
  quadroPreencher.classList.add("centralizar");
  quadroPreencher.setAttribute("border", "1");


  for(var i=1; i<17; i++) {

    var tr = document.createElement("tr");

    for(var j=1; j<10; j++) {
      var td = document.createElement("td");
      td.setAttribute("id", i+""+j);      
      td.classList.add("lugar");

      tr.appendChild(td);
    }

    quadroPreencher.appendChild(tr);
  } 

  return quadroPreencher;
}