import express from 'express';
import { createServer } from 'http';

import routes from './routes';
import cors from 'cors'


const app = express();

app.use(express.json());
app.use(cors());

app.use('/', routes());

const server = createServer(app);

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});