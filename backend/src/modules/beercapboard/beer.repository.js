
const Excel = require("exceljs");
const path = require("path");
const filePath = path.join(__dirname, "../../../../base", "beercapboard.xlsx");

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
      { header: "data_consumo", key: "data_consumo", width: 25 },
      { header: "nome", key: "nome", width: 25 },
      { header: "cervejaria", key: "cervejaria", width: 25 },
      { header: "pais", key: "pais", width: 20 },
      { header: "comentarios", key: "comentarios", width: 30 },
      { header: "beerCapColor", key: "beerCapColor", width: 15 }
    ];

    await wb.xlsx.writeFile(filePath);
    return wb;
  }
}

async function createBeer(userId, beerData) {

  const workbook = await ensureFile();
  const sheet = workbook.getWorksheet("beercapboard");

  console.log("informacoes" + beerData.nome);

  sheet.addRow([
    null,              // ExcelJS ignora o índice 0
    beerData.id,        // col 1
    beerData.data_consumo, // col 2
    beerData.nome,      // col 3
    beerData.cervejaria,// col 4
    beerData.pais,      // col 5
    beerData.comentarios, // col 6
    beerData.beerCapColor // col 7
  ]);

  await workbook.xlsx.writeFile(filePath);

  return {
    success: true
  };
}

async function getAllByUserId(userId) {
  const wb = await ensureFile();
  const sheet = wb.getWorksheet("beercapboard");

  return sheet.getSheetValues()
    .slice(2) // remove linha de header
    .map(row => ({
      id: row[1],
      data_consumo: row[2],
      nome: row[3],
      cervejaria: row[4],
      pais: row[5],
      comentarios: row[6],
      beerCapColor: row[7]
    }));
}

async function getAllBeerResumeByUserIdAndIdDBeerCapBoard(userId, beerCapBoardId) {
  const wb = await ensureFile();
  const sheet = wb.getWorksheet("beercapboard");

  return sheet.getSheetValues()
    .slice(2) // remove linha de header
    .map(registro => ({
      idBeerCapBoard: registro[1],
      beerCapColor: registro[7]
    }));
}

async function getOneById(id) {
    return null;
 // const all = await getAll();
 // return all.find(b => b.id === id) || null;
}

module.exports = { createBeer, getAllByUserId, getOneById, getAllBeerResumeByUserIdAndIdDBeerCapBoard };