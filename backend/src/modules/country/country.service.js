const countryMap = require("./countryMap");


function convertCountryToSigla(value) {

    const upper = value.toUpperCase();

    if (countryMap[upper]) {
        return upper;
    }

    // Se for nome → procurar sigla correspondente
    const found = Object.entries(countryMap).find(([, nome]) =>
        nome.toLowerCase() === value.toLowerCase()
    );

    if (found) return found[0];

    return null;
}

function getCountries() {
  return countryMap;
}

module.exports = {
    convertCountryToSigla,
    getCountries
};