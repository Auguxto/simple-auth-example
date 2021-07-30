import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

import './database';

import routes from './routes';

import errorHandler from './middlewares/errorHandler';

const app = express();

app.use(express.json());
app.use(routes);

app.use(errorHandler);

app.listen(3333, () => console.log('Server started on port 3333!'));
