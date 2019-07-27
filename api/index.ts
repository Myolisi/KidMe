import fs = require('fs');
import express = require('express');
import { Builder, Nuxt } from 'nuxt';
import nuxtConfig = require('../nuxt.config');
import chalk from 'chalk';
import bodyparser = require('body-parser');
import { set, connect } from 'mongoose';
import router from './routes/jokesStats';
import { get } from 'config';
import https = require('https');
import http = require('http');

const host = process.env.HOST || '0.0.0.0';
const port = Number(process.env.PORT) || 3000;
const app = express();

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
  https
    .createServer(
      {
        key: fs.readFileSync('./api/server.key'),
        cert: fs.readFileSync('./api/server.cert')
      },
      app
    )
    .listen(port, host);
} else {
  http.createServer(app).listen(port);
}

// mongos
set('useNewUrlParser', true);
const option = {
  socketTimeoutMS: 30000,
  keepAlive: true,
  reconnectTries: 30000
};
connect(get('database.host'));

nuxtConfig.dev = !(process.env.NODE_ENV === 'production');

app.use('/api', router);

app.use(
  bodyparser.urlencoded({
    extended: false
  })
);

app.use(bodyparser.json());

async function start() {
  const nuxt = new Nuxt(nuxtConfig);
  if (nuxtConfig.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  app.get('*', nuxt.render);
  console.log(chalk.cyan(`--> Server listening on http://${host}:${port} <---`));
}
start();
