import 'reflect-metadata';
import express from 'express';
import clientRoutes from './routes/client.routes';
import 'express-async-errors';
import handleErrorMiddleware from './middlewares/handleError.middleware';

const app = express();

app.use(express.json());
app.use('/clients', clientRoutes);

app.use(handleErrorMiddleware);

export default app;
