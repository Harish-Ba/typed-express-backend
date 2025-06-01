import express from 'express';
import policyRoutes from './routes/policyRoutes';
import { logger } from './middleware';

const app = express();

app.use(express.json());
app.use(logger);
app.use('/api', policyRoutes);

export default app;