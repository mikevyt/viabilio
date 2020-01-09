import express from 'express';
import { createConnection, getConnection } from 'typeorm';
import * as bodyParser from 'body-parser';
import dotenv from 'dotenv';

import { userRouter, campaignRouter } from './routes';
import User from './models/User';

dotenv.config();

createConnection({
    name: 'default',
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER, // TODO: get password
    database: 'viabilio',
    entities: [User] // TODO: Use path instead
}).then(() => {
    const app: express.Application = express();
    app.use(bodyParser.json());

    app.use('/users', userRouter);
    app.use('/campaigns', campaignRouter);

    app.listen(process.env.PORT || 3000, function() {
        console.log('Example app listening on port 3000!');
    });
});
