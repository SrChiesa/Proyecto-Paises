const prompt = require('prompt-sync')();

const nombrePais = prompt('Ingrese el nombre de un país: ');

fetch('https://restcountries.com/v3.1/name/''+nombrePais)
  .then(res => res.json())
  .then(data => {
    const pais = data[0];
    console.log('--- Información de Argentina ---');
    console.log('Nombre:', pais.name.common);
    console.log('Capital:', pais.capital[0]);
    console.log('Región:', pais.region);
  });
