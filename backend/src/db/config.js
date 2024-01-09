const mysql = require('mysql2/promise');
require('dotenv').config()

async function connectToDatabase() {
  try {
    const pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    })

    return pool;
  } catch (error) {
    console.error('Erro ao criar o pool de conexões:', error);
    throw error;
  }
}

module.exports = connectToDatabase;