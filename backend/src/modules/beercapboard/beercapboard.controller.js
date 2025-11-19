const Beer = require("./beer.entity");


exports.getOneById = (req, res) => {
const beer = new Beer(new Date(), "Interestellar", "Hocus Pocus", "Brasil", "estilo ipa", "blue")
 res.json(beer);
};