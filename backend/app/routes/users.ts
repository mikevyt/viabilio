import * as express from 'express';
import { Request, Response } from 'express';
import { getConnection } from 'typeorm';

import User from '../models/User';
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const connection = await getConnection();
    const users = await connection.getRepository(User).find();
    res.json(users);
});

router.post('/', async (req: Request, res: Response) => {
    const connection = await getConnection();
    await connection
        .createQueryBuilder()
        .insert()
        .into(User)
        .values([
            {
                userName: 'RichRod',
                firstName: 'Rich',
                lastName: 'Rod',
                email: 'asd@asdk.com',
                password: 'lasdn'
            }
        ])
        .execute();
    res.send('success');
});

export { router };
