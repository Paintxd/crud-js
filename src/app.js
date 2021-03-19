const express = require('express');
const crudRoutes = require('./routes/crudRoutes');
const crudDb = require('./db/crudDb');

module.exports = () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/', crudRoutes);

  crudDb.init();

  return app;
};
