const jwt = require('jsonwebtoken');
const axios = require('axios');
const { response } = require('express');

const login = (req, res, next) => {
  const datosLogin = req.body;

  axios.get(`http://localhost:3000/users?email=${ datosLogin.email }`)
    .then(response => {
      const users = response.data;

      if (users.length === 0) {
        return res.status(401).json({ msg: 'Los datos del login son incorrectos' });
      } else {
        const [user] = users;

        if (user.password === datosLogin.password) {
          // Devolver el token
          const token = jwt.sign({
            id: user.id,
            nombre: user.nombre,
            rol: user.rol,
            lang: 'es',
            theme: 'dark'
          }, 'PALABRA_SECRETA');

          return res.json({ token });
        } else {
          res.status(401);

          return res.json({ msg: 'Los datos del login son incorrectos' });
        }
      }
    });
};

const signup = (req, res, next) => {
  const datosRegistro = req.body;

  datosRegistro.rol = 'USER';

  axios.get(`http://localhost:3000/users?email=${ datosRegistro.email }`)
    .then(response => {
      const users = response.data;

      if (users.length === 0) {
        res.status(201);

        return axios.post('http://localhost:3000/users', datosRegistro);
        // .then(response => {
        //   console.log(response);
        //
        //   return res.json({ data: response.data });
        // });
      } else {
        res.status(409);

        return Promise.resolve({ data: { msg: 'Ya existe un usuario registrado con ese email' } });
      }
    })
    .then(response => {
      console.log({ response });
      return res.json({ data: response.data });
    });

};

module.exports = {
  login,
  signup
};
