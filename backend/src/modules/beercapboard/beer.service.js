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

function createBeer(data) {
  const parsed = beerSchema.parse(data); 

  return new Beer(
    parsed.id,
    parsed.dataConsumo,
    parsed.nome,
    parsed.cervejaria,
    parsed.pais,
    parsed.comentarios,
    parsed.beerCapColor
  );
}

async function getAllByUserId(userId) {
  return await excelRepo.getAllByUserId(userId);
  /*return createBeer({
    id: 1,
    dataConsumo: new Date(),
    nome: "Interstellar",
    cervejaria: "Hocus Pocus",
    pais: "Brasil",
    comentarios: "IPA muito boa",
    beerCapColor: "blue"
  });*/
}

async function getOneById(id) {
  return await excelRepo.getOneById(id);
}

/*
function getOneById(id) {
    // SIMULAÇÃO de retorno do serviço
  return createBeer({
    id: 3,
    dataConsumo: new Date(),
    nome: "Interstellar",
    cervejaria: "Hocus Pocus",
    pais: "Brasil",
    comentarios: "IPA muito boa",
    beerCapColor: "blue"
  });
}*/

module.exports = {
  getOneById,
  createBeer,
  getAllByUserId
};