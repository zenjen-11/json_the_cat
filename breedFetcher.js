const request = require('request');

const fetchBreedDescription = function(breed) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(url,function(error, response, body) {

    if (error) {
      console.log(error);
      return;
    }
    const data = JSON.parse(body);
    //console.log(data);
    //console.log(typeof data);
    const cat = data[0];
    if (!cat) {
      console.log('Cat not found.');
      return;
    }

    console.log(cat.description);


  });

};
// create a variabe to fetch the breed of cat. The variable has 2 parameters, callback, breed


module.exports = { fetchBreedDescription };