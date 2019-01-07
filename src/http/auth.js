import http from 'http-status-codes';

import * as users from '../data/user';
import * as tokenAPI from '../token';

const tokenPrefix = 'Bearer ';

export async function Login(req, res) {

    // fail fast if no body
    if (!req.body || req.body === {} || !req.body.username || !req.body.password) {
        return res.status(http.BAD_REQUEST).json(http.getStatusText(http.BAD_REQUEST));
    }

    // get username and password from body
    const { username, password } = req.body;

    // get user that matches credentials
    const user = await getUser({ username, password });
    if (!user) {
        return res.status(http.FORBIDDEN).json(http.getStatusText(http.FORBIDDEN));
    }

    // generate token
    const token = `${tokenPrefix}${generateToken(user)}`;
    
    return res.json({ token });
};

export function VerifyToken(req, res) {

    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(http.BAD_REQUEST).json(http.getStatusText(http.BAD_REQUEST));
    }

    const token = authorization.substring(tokenPrefix.length);

    if (!verifyToken(token)) {
        return res.status(http.UNAUTHORIZED).json(http.getStatusText(http.UNAUTHORIZED));
    }

    return res.json({ authorized: true })
}

function getUser(credentials) {
    return users.Get(credentials);
}

function generateToken(user) {
    return tokenAPI.GenerateToken(user);
}

function verifyToken(token) {
    return tokenAPI.VerifyToken(token);
}