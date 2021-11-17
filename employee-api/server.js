/**
 * Arquivo: server.js
 * Descrição: arquivo responsável por toda a configuração e execução do Back-End ('Employee')
 * Data: 16/11/2021
 * Author: Lorenzo Costa Bianchi
 */

const app = require("./src/app");
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Aplicação sendo executada na porta:", port);
});
