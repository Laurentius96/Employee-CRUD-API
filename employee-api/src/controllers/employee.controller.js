/**
 * Arquivo: index.js
 * Descrição: arquivo responsável pela lógica do CRUD (API - Employee)
 * Data: 16/11/2021
 * Author: Lorenzo Costa Bianchi
 */

const db = require("../config/database");

// ==> Método responsável por criar um novo 'Employee':
exports.createEmployee = async (req, res) => {
  const { name, job_role, salary, birth, employee_registration } = req.body;
  const { rows } = await db.query(
    "INSERT INTO emply (name, job_role, salary, birth, employee_registration) VALUES ($1, $2, $3, $4, $5,)"[
      (name, job_role, salary, birth, employee_registration)
    ]
  );

  res.status(201).send({
    message: "Employee added successfully!",
    body: {
      employee: { name, job_role, salary, birth, employee_registration },
    },
  });
};
