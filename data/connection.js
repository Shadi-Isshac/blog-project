
const Pool = require('pg').Pool;
const pool = new Pool({
    host: 'LocalHost',
    user: "postgres",
    port: 5432,
    password: "Password101",
    database: "postgres"
});

module.exports = pool;