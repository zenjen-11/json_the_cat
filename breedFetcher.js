const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(url,function(error, response, body) {

    const data = JSON.parse(body);
    const cat = data[0];

    if (error) {
      callback(error, null);
      return;
    }
    if (null, data[0]) {
      callback(data[0].description);
    }
    if (!cat) {
      callback('Cat not found.');
      return;
    }

  });

};

module.exports = { fetchBreedDescription };