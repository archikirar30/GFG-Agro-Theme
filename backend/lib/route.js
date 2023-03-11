const router = require('express').Router();
const {body} = require('express-validator');
const {register} = require('./controllers/registerController');
const {login} = require('./controllers/loginController');
const {getUser} = require('./controllers/getUserController');

router.post('/register', [
    body('name',"The name must be of minimum 3 characters length").notEmpty().escape().trim().isLength({ min: 3 }),
    body('email',"Invalid email address").notEmpty().escape().trim().isEmail(),
    body('password',"The Password must be of minimum 4 characters length").notEmpty().trim().isLength({ min: 4 }),
    body('first_name',"The first Name must be of minimum 4 characters length").notEmpty().trim().isLength({ min: 4 }),
    body('last_name',"The last Name must be of minimum 4 characters length").notEmpty().trim().isLength({ min: 4 }),
    body('phone_number',"The phone number must be of minimum 10 characters length").notEmpty().trim().isLength({ min: 10 }),
    body('state',"The state must be of minimum 5 characters length").notEmpty().trim().isLength({ min: 5 }),
    body('district',"The district must be of minimum 5 characters length").notEmpty().trim().isLength({ min: 5 }),
    body('pincode',"The pincode must be of minimum 5 characters length").notEmpty().trim().isLength({ min: 5 }),
], register);


router.post('/login',[
    body('email',"Invalid email address").notEmpty().escape().trim().isEmail(),
    body('password',"The Password must be of minimum 4 characters length").notEmpty().trim().isLength({ min: 4 }),
],login);

router.get('/getuser',getUser);

module.exports = router;