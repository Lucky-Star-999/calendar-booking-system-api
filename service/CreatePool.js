const {Pool} = require('pg');

// Create pool
exports.createPool = () => {
    const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'calendarbookingsystem_v2',
        password: '123456',
        port: 5432,
    });

    return pool;
}