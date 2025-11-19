const Beer = require("./beer.entity");
const beerService = require("./beer.service.js");

exports.getOneById = async (req, res) => {
    const id = Number(req.params.id);

    //const beer = beercapBoardService.getOneById(1); 
    //const beers = [];
    //beers.push(beer); 
    const beers = await beerService.getOneById(id);      

 res.json(beers);
};

exports.getAllByUserId = async (req, res) => {
    const idUser = Number(req.params.idUser);

    const beers = await beerService.getAllByUserId(idUser);      

 res.json(beers);
};