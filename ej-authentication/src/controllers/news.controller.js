const axios = require('axios');
const emitter = require('../utils/emitter');

const createNoticia = (req, res, next) => {
  const noticia = req.body;

  axios.post('http://localhost:3000/news', noticia)
    .then(response => {
      const nuevaNoticia = response.data;

      emitter.emit('noticiaCreada', nuevaNoticia);

      return res.status(201).json(nuevaNoticia);
    });
};

const getNoticias = (req, res, next) => {
  axios.get('http://localhost:3000/news')
    .then(response => res.json(response.data));
};

module.exports = {
  createNoticia,
  getNoticias
};
