/** Load express-validator external module **/
const { validationResult } = require("express-validator");


/** Define the custom middleware to apply the sanitization the req objects based on validation rules **/
const sanitizeReq = (req, res, next) => {
    const errors = validationResult(req);
    const errList = errors.array().map(errItem => errItem?.msg);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errList });
    }
    next();
}

module.exports = sanitizeReq;