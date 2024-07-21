const { check } = require("express-validator");

exports.signUpValidationRules = () => [
    check("name")
        .trim()
        .notEmpty()
        .withMessage('**name is required')
        .isLength({ min: 3 })
        .withMessage('**name should be minimum 3 characters')
        .isLength({ max: 30 })
        .withMessage('**name should be maximum 30 characters'),
    check("email")
        .trim()
        .notEmpty()
        .withMessage('**emailId is required')
        .isEmail()
        .withMessage('**Invalid Email Id'),
    check("password")
        .notEmpty()
        .withMessage('**password is required')
        .isLength({ min: 6, max: 8 })
        .withMessage('**password should be minimum 8 characters and maximum 8 characters')
        .matches(/[A-Z]/)
        .withMessage('**Password should contain atleast one Uppercase character')
        .matches(/[a-z]/)
        .withMessage('**Password should contain atleast one lowercase character')
        .matches(/\d/)
        .withMessage('**Password should contain atleast one digit')
        .matches(/[@$!%*?&#]/)
        .withMessage('**Password should contain atleast one special characters: (@, $, !, %, *, ?, &, #)'),
    check('dob')
        .notEmpty()
        .withMessage('**dob is required')
        .isISO8601()
        .withMessage('**Invalid date format (yyyy-mm-dd)')
        .toDate()
];

exports.signInValidationRules = () => [
    check("email")
        .trim()
        .notEmpty()
        .withMessage('**emailId is required')
        .isEmail()
        .withMessage('**Invalid Email Id'),
    check("password")
        .notEmpty()
        .withMessage('**password is required')
        .isLength({ min: 6, max: 8 })
        .withMessage('**password should be minimum 8 characters and maximum 8 characters')
        .matches(/[A-Z]/)
        .withMessage('**Password should contain atleast one Uppercase character')
        .matches(/[a-z]/)
        .withMessage('**Password should contain atleast one lowercase character')
        .matches(/\d/)
        .withMessage('**Password should contain atleast one digit')
        .matches(/[@$!%*?&#]/)
        .withMessage('**Password should contain atleast one special characters: (@, $, !, %, *, ?, &, #)')
];
