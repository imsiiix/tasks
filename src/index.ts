/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import App from './app';
import connect from './database';

const app = new App();

connect();

app.start();
