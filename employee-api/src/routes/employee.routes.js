// @ts-nocheck
/**
 * Arquivo: routes/employee-routes.js
 * Descrição: Arquivo responsável pelas rotas da API
 * Data: 16/11/2021
 * Author: Lorenzo Costa Bianchi
 */

const router = require("express-promise-router")();
const employeeController = require("../controllers/employee.controller");

// ==> Definindo as rotas do CRUD - 'Employee'

// ==> Rota responsável por criar um novo 'Colaborador(a)': (POST): localhost:3000/api/employees
router.post("/employees", employeeController.createEmployee);

module.exports = router;
