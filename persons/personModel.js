const db = require('../api/dbConfig');

module.exports = {
    insert, remove, getAll
};




function remove(id) {
    return null;
  }
  
  function getAll() {
    return db('persons');
  }



async function insert(person) {
    return db('persons').insert(person, "id");
  }6