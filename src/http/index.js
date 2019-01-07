import express from 'express';

import {
    Login,
    VerifyToken
} from './auth';

const router = express.Router();

router
    .get('/ping', (req, res, next) => res.json('pong'))
    .get('/verify', VerifyToken)
    .post('/login', Login);

export default router;