
const Excel = require("exceljs");
const path = require("path");
const filePath = path.join(__dirname, "../../../../base", "beercapboard.xlsx");

let id =3;
async function ensureFile() {
  const workbook = new Excel.Workbook();

  try {
    await workbook.xlsx.readFile(filePath);
    return workbook;
  } catch {
    // cria novo arquivo
    const wb = new Excel.Workbook();
    const sheet = wb.addWorksheet("beercapboard");

    sheet.columns = [
      { header: "id", key: "id", width: 10 },
      { header: "id_board", key: "idBoard", width: 10 },
      { header: "data_consumo", key: "dataConsumo", width: 25 },
      { header: "nome", key: "nome", width: 25 },
      { header: "cervejaria", key: "cervejaria", width: 25 },
      { header: "pais", key: "pais", width: 20 },
      { header: "comentarios", key: "comentarios", width: 30 },
      { header: "beer_cap_color", key: "beerCapColor", width: 15 }
    ];

    await wb.xlsx.writeFile(filePath);
    return wb;
  }
}

async function createBeer(userId, beerData) {
id = id+1;
  const workbook = await ensureFile();
  const sheet = workbook.getWorksheet("beercapboard");

  console.log("informacoes" + beerData.idBoard);
  

  sheet.addRow([
    null,              // ExcelJS ignora o índice 0
    id,        // col 1
    beerData.idBoard,
    beerData.posicao,
    beerData.dataConsumo,
    beerData.nome,
    beerData.cervejaria,
    beerData.pais,
    beerData.comentarios,
    beerData.beerCapColor
  ]);

  

  await workbook.xlsx.writeFile(filePath);

  return {
    success: true
  };
}

async function getAllByIdBoard(idBoard) {
  const wb = await ensureFile();
  const sheet = wb.getWorksheet("beer");

  return sheet.getSheetValues()
    .slice(2) // remove linha de header
    .map(row => ({
      id: row[1],
      idBoard:row[2],
      posicao: row[3],
      data_consumo: row[4],
      nome: row[5],
      cervejaria: row[6],
      pais: row[7],
      comentarios: row[8],
      beerCapColor: row[9]
    }));
}

async function getAllBeerResumeByIdBoard(idBoard) {
  const wb = await ensureFile();
  const sheet = wb.getWorksheet("beer");

  return sheet.getSheetValues()
    .slice(2) // remove linha de header
    .map(registro => ({
      posicao: registro[3],
      beerCapColor: registro[9]
    }));
}

async function getOneById(id) {
    return null;
}

module.exports = { createBeer, getAllByIdBoard, getOneById, getAllBeerResumeByIdBoard };