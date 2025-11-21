const { z } = require("zod");
const Beer = require("./beer.entity");
const excelRepo = require("./beer.repository");


const beerSchema = z.object({
  id: z.number().min(1, "Posição no quadro é obrigatória"),
  dataConsumo: z.date(),
  nome: z.string().min(1, "Nome é obrigatório"),
  cervejaria: z.string().min(1, "Cervejaria é obrigatória"),
  pais: z.string().min(1, "País é obrigatório"),
  comentarios: z.string().optional(),
  beerCapColor: z.string().min(1, "Cor da tampinha é obrigatória")
});

async function createBeer(userId, data) {
  return await excelRepo.createBeer(userId, data);
}

async function getAllByUserId(userId) {
  return await excelRepo.getAllByUserId(userId);
}

async function getAllResumeByUserIdAndIdDBeerCapBoard(userId, idDBeerCapBoard) {
  //raw pois é um dado cru do banco
  const raw =  await excelRepo.getAllBeerResumeByUserIdAndIdDBeerCapBoard(userId, idDBeerCapBoard);

  return raw.map(item => ({
    id: item.idBeerCapBoard,
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
  getAllByUserId,
  getAllResumeByUserIdAndIdDBeerCapBoard
};