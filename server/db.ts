const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres', 
    host: 'localhost',
    password: 'postgres', 
    database: 'postgres', 
    port: 5432,
   
});

module.exports = {pool};