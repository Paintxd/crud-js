const express = require('express');
const crudDb = require('../db/crudDb');

const router = express.Router();

router.get('/usuarios', (req, res) => {
  const result = crudDb.selectAll();

  res.status(200).json(result);
});

router.get('/usuario/:id', (req, res) => {
  const result = crudDb.select(Number(req.params.id));

  if (!result)
    res.status(404).json({ error: 'Usuario nao encontrado' });

  res.status(200).json(result);
});

router.post('/usuario/registro', (req, res) => {
  const { nome, idade } = req.body;

  if (!nome || !idade)
    res.status(500).json({ error: 'Necessario informar nome e idade' });

  crudDb.insert(nome, idade);

  res.status(201).json({});
});

router.put('/usuario/:id', (req, res) => {
  const { nome } = req.body;

  if (!nome)
    res.status(500).json({ error: 'Necessario informar nome' });

  const result = crudDb.update(Number(req.params.id), nome);

  if (!result)
    res.status(404).json({ error: 'Usuario nao encontrado' });

  res.status(200).json({});
});

router.delete('/usuario/:id', (req, res) => {
  crudDb.delete(Number(req.params.id));

  res.status(200).json({});
});

module.exports = router;
