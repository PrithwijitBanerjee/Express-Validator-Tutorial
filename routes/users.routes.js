/** Load express third party module/ backend framework **/
const express = require('express');

/** Load user related controllers **/
const usrController = require('../controllers/users.controllers');

/** Load validation rules for login and registration **/
const { signInValidationRules, signUpValidationRules } = require('../validation/validationRules');

/** Load sanitization custom middleware for sanitize the  incoming req **/
const sanitizateReq = require('../middlewares/sanitization.middlewares');

/** create a router service for user **/
const usrRouter = express.Router({
    caseSensitive: true
});


/** Handles all user's related routes/ API Endpoints **/
usrRouter.post('/register', signUpValidationRules(), sanitizateReq, usrController.registerUsr);

usrRouter.post('/login', signInValidationRules(), sanitizateReq, usrController.loginUsr);

module.exports = usrRouter;
console.log('user routes is loading ...');