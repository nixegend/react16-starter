const path = require('path');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const fallback = require('express-history-api-fallback');
const config = require('../app-settings');
const mockData = require('./mock-data');

const app = express();
const PORT = process.env.PORT || config.serverPort;
const API = config.apiUrl;

// https://github.com/expressjs/cors
const localDevPath = `${config.protocol}://${config.clientHost}:${config.clientPort}`;

const whitelist = [localDevPath];

const corsOptions = {
  origin: false,
  credentials: true,
  optionsSuccessStatus: 200,
};

const corsOptionsDelegate = (req, callback) => {
  corsOptions.origin = whitelist.indexOf(req.header('Origin')) !== -1;
  callback(null, corsOptions);
};

app.use(cors(corsOptionsDelegate)); // CORS middleware on express side
app.use(express.static(path.join(__dirname, `../${config.staticFolder}`)));
app.use(express.static(path.join(__dirname, `../${config.distFolder}`)));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fallback('/index.html'));

app.get('/*', (req, res, next) => {
  if (req.url.indexOf(API) === -1) {
    res.sendFile('/index.html');
  } else {
    next();
  }
});

app.get(`${API}/users`, (req, res) => {
  res.json(mockData);
});

app.listen(PORT);
