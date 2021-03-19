const db = require('alasql');

module.exports = crudDb = {
  init: () => {
    db('CREATE TABLE usuario (id INTEGER PRIMARY KEY AUTOINCREMENT, nome STRING, idade INT)');
    db("INSERT INTO usuario (nome, idade) VALUES ('Carlos', 12)");
    db("INSERT INTO usuario (nome, idade) VALUES ('Eduardo', 17)");
  },
  selectAll: () => {
    return db('SELECT * FROM usuario');
  },
  select: (id) => {
    return db('SELECT * FROM usuario WHERE id = ?', [id])[0];
  },
  insert: (nome, idade) => {
    return db('INSERT INTO usuario (nome, idade) VALUES (?, ?)', [nome, idade]);
  },
  update: (id, nome) => {
    return db('UPDATE usuario SET nome = ? where id = ?', [nome, id]);
  },
  delete: (id) => {
    db('DELETE FROM usuario WHERE id = ?', [id]);
  },
}
