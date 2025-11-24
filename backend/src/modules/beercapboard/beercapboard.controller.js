const Beer = require("./beer.entity");
const beerService = require("./beer.service.js");

exports.createBeer = async (req, res) => {
    console.log("chegouy a req" + req.params);
    const idBoard = Number(req.params.idBoard);
    const beerData = req.body;
    const created = await beerService.createBeer(idBoard, beerData);
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

exports.getAllByIdBoard = async (req, res) => {
    const idBoard = Number(req.params.idUser);
    const beers = await beerService.getAllByIdBoard(idBoard);      
    res.json(beers);
};

exports.getAllBeerResumeByIdBeerCapBoard = async (req, res) => {
  //  const idUser = Number(req.params.idUser);
    const idBeerCapBoard = Number(req.params.idBeerCapBoard);

    const beerCapBoardResume = await beerService.getAllBeerResumeByIdBoard(idBeerCapBoard);      
    res.json(beerCapBoardResume);
};