const { z } = require("zod");
const Beer = require("./beer.entity");
const excelRepo = require("./beer.repository");
const countryService = require("../country/country.service");

const beerSchema = z.object({
  idBoard: z.number().min(1, "Obrigatório informar o quadro"),
  posicao: z.number().min(1, "Posição da tampinha no quadro é obrigatória"),
  dataConsumo: z.date(),
  nome: z.string().min(1, "Nome é obrigatório"),
  cervejaria: z.string().min(1, "Cervejaria é obrigatória"),
  pais: z.string().min(1, "País é obrigatório"),
  comentarios: z.string().optional(),
  beerCapColor: z.string().min(1, "Cor da tampinha é obrigatória")
});

async function createBeer(idBoard, data) {
  data.pais = countryService.convertCountryToSigla(data.pais);
  
  await excelRepo.createBeer(idBoard, data);
  return {
    message: "Cerveja inserida com sucesso!"
  };
}

async function getAllByIdBoard(idBoard) {
  return await excelRepo.getAllByIdBoard(idBoard);
}

async function getAllBeerResumeByIdBoard(idBoard) {
  //raw pois é um dado cru do banco
  const raw =  await excelRepo.getAllBeerResumeByIdBoard(idBoard);

  return raw.map(item => ({
    posicao: item.posicao,
    beerCapColor: item.beerCapColor
  }));
}

async function getOneById(id) {
  return await excelRepo.getOneById(id);
}

module.exports = {
  createBeer,
  getOneById,
  createBeer,
  getAllByIdBoard,
  getAllBeerResumeByIdBoard
};