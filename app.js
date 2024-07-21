/** Load express third party module/ backend framework **/
const express = require('express');

/** Load user related routes **/
const usrRoutes = require('./routes/users.routes');

// Create an application level server/ replica by express framework
const app = express();

/** use  all built-in express middlewares in app level **/
/** Body-parser middlewares **/
app.use(express.json()); // for hybrid clients mobile/web
app.use(express.urlencoded({ extended: true })); // for web clients

/** Basic Landing Page **/
app.get('/', (_, res) => {
    res.status(200).send("<h1 align='center'>Express Validator Concept</h1>");
});

/** Define all user related routes in global application **/
app.use('/api/v1', usrRoutes);

module.exports = app;
console.log('app is loading ...');
