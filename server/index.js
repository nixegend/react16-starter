const path = require('path');
const http = require('http');
const fallback = require('express-history-api-fallback');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const open = require('open');
const config = require('../app-settings');

const API = config.apiUrl;
const PORT = process.env.PORT || config.serverPort;

const usersList = [
  { id: 'd1wy', name: 'Anthony' },
  { id: 'e2wh', name: 'Bob' },
  { id: 'f3wq', name: 'David' },
  { id: 'c4we', name: 'Mark' },
  { id: 'z5wd', name: 'Jim' },
];

// https://github.com/expressjs/cors
const corsOptions = {
  origin: `http://${config.clientHost}:${config.clientPort}`,
  credentials: true,
  optionsSuccessStatus: 200,
};

const app = express();
app.set('port', PORT);

const server = http.createServer(app);
server.listen(PORT);

// static files
app.use(cors(corsOptions)); // CORS middleware on express side
app.use(express.static(path.join(__dirname, config.distFolder)));
app.use(express.static(path.join(__dirname, '../static')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fallback(`${__dirname}/index.html`));

app.get(`${API}/users`, (req, res) => {
  res.json(usersList);
});

if (process.argv.indexOf('--open') !== -1) {
  console.log(`Listening at ${config.serverHost}:${PORT}/`);
  open(`http://${config.serverHost}:${PORT}/`);
}
