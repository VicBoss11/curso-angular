const http = require('http');
const express = require('express');
const cors = require('cors');
const SocketIO = require('socket.io');
const appRoutes = require('./routes');
const emitter = require('./utils/emitter');

const app = express();

app.use(cors({
  origin: ['http://localhost:4200']
}));

app.use(express.json());

app.use(appRoutes);

const server = http.createServer(app);

const io = SocketIO(server, {
  cors: {
    origin: '*'
  }
});

io.on('connection', socket => {
  console.log(`Se ha conectado alguien nuevo con el id ${ socket.id }`);

  emitter.on('noticiaCreada', noticia =>  {
    socket.emit('nuevaNoticia', noticia);
  })
});

server.listen(3200, () => {
  console.log(`Listening on http://localhost:3200`);
});
