require("@babel/polyfill");
import express from 'express';
import { ApplyMiddleware } from './middleware';

global.envConfig = require('./config.json')[`${process.env.NODE_ENV}`];

const { host, port } = envConfig;

const app = ApplyMiddleware(express());

app.listen(port, host, () => {
    console.log(`Listening at ${host}:${port}`);
});

