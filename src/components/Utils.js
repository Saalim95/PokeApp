// import cache from 'memory-cache';
import axios from 'axios';
//import constants from './consts.json';

// get data from mem-cache. If mem-cache doesn't exist
// then set the data into mem-cache
const memcache = require('memory-cache');

const getPokemonbyID = (id) => {
  //TODO: Add this to constant .json
  const api = "https://pokeapi.co/api/v2/pokemon/"
  const pokeurl = api+id;
  const cachedData = memcache.get(pokeurl);
  //if data in mem-cache
  if (cachedData !== null){
    //console.log("Cache found", cachedData);
    return cachedData;
  }
  //if data not in mem-cache
  else {
    axios.get(pokeurl)
    .then((response)=>{
      memcache.put(pokeurl, response.data);
      return response.data;
    })
    .catch (function (err){
      throw err
    })

  }

}

export { getPokemonbyID };
