const crudDb = require('../db/crudDb');

class CrudController {

  findUsuarios(req, res) {
    const result = crudDb.selectAll();

    res.status(200).json(result);
  };

  findUsuario(req, res) {
    const result = crudDb.select(Number(req.params.id));

    if (!result)
      res.status(404).json({ error: 'Usuario nao encontrado' });

    res.status(200).json(result);
  };

  registraUsuario(req, res) {
    const { nome, idade } = req.body;

    if (!nome || !idade)
      res.status(500).json({ error: 'Necessario informar nome e idade' });

    crudDb.insert(nome, idade);

    res.status(201).json({});
  };

  updateUsuario(req, res) {
    const { nome } = req.body;

    if (!nome)
      res.status(500).json({ error: 'Necessario informar nome' });

    const result = crudDb.update(Number(req.params.id), nome);

    if (!result)
      res.status(404).json({ error: 'Usuario nao encontrado' });

    res.status(200).json({});
  };

  deleteUsuario(req, res) {
    crudDb.delete(Number(req.params.id));

    res.status(200).json({});
  };

}

module.exports = new CrudController();
