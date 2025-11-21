const Beer = require("./beer.entity");
const beerService = require("./beer.service.js");

exports.createBeer = async (req, res) => {
    const userId = Number(req.params.idUser);
    const beerData = req.body;
    const created = await beerService.createBeerCap(userId, beerData);
    res.json(created);
}


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

exports.getAllResumeByUserIdAndIdDBeerCapBoard = async (req, res) => {
    const idUser = Number(req.params.idUser);
    const idBeerCapBoard = Number(req.params.idBeerCapBoard);

    const beerCapBoardResume = await beerService.getAllResumeByUserIdAndIdDBeerCapBoard(idUser, idBeerCapBoard);      
    res.json(beerCapBoardResume);
};