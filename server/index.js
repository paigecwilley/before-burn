const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const CORS = require('cors');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const postController = require('./controllers/postController');

// import environmental variables from our .env file or server
// and loads them into the app
require('dotenv').load();

// create our Express app
const server = express();

// Takes the raw requests and turns them into usable properties on req.body
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(CORS());

app
  .prepare()
  .then(() => {
    server.get('/api/posts', postController.getPosts);
    // server.get('/api/posts', (req, res) => res.json({ test: 'test' }))
    server.get('*', (req, res) => handle(req, res)); //if you get all

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  });