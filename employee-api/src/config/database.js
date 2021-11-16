/**
 * Arquivo: conftg/database.js
 * Descrição: arquivo responsável pelas 'connectrionStrings' (Cosmos DB & PostgreSQL)
 * Data: 16/11/2021
 * Author: Lorenzo Costa Bianchi
 */

const { Pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config();
// ==> Conexção com a Base de Dados:

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.on("error", (err, client) => {
  console.log("Unexpected error on idle client", err);
  process.exit(-1);
});

pool.on("connect", () => {
  console.log("Base de Dados Conectado com Sucesso!");
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
