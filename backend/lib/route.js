// const router = require('express').Router();
// const {body} = require('express-validator');
// const {register} = require('./controllers/registerController');
// const {googlelogin} = require('./controllers/googleLoginController');
// const {login} = require('./controllers/loginController');
// const {getUser} = require('./controllers/getUserController');
// const passport = require('passport');
// const cookieSession = require('cookie-session');
// require('./passport');
  
// router.use(cookieSession({
//     name: 'google-auth-session',
//     keys: ['key1', 'key2']
// }));
// router.use(passport.initialize());
// router.use(passport.session());
    
  
// router.get('/', (req, res) => {
//     res.send("<button><a href='/auth'>Login With Google</a></button>")
// });
  
// // Auth 
// router.get('/auth' , passport.authenticate('google', { scope:
//     [ 'email', 'profile' ]
// }),googlelogin);
  
// // Auth Callback
// router.get( '/auth/callback',
//     passport.authenticate( 'google', {
//         successRedirect: '/auth/callback/success',
//         failureRedirect: '/auth/callback/failure'
// }),googlelogin);
  
// // Success 
// router.get('/auth/callback/success' , (req , res) => {
//     if(!req.user)
//         res.redirect('/auth/callback/failure');
//     res.send("Welcome " + req.user.email);
// });
  
// // failure
// router.get('/auth/callback/failure' , (req , res) => {
//     res.send("Error");
// })

// router.post('/register', [
//     body('name',"The name must be of minimum 3 characters length").notEmpty().escape().trim().isLength({ min: 3 }),
//     body('email',"Invalid email address").notEmpty().escape().trim().isEmail(),
//     body('password',"The Password must be of minimum 4 characters length").notEmpty().trim().isLength({ min: 4 }),
//     body('first_name',"The first Name must be of minimum 4 characters length").notEmpty().trim().isLength({ min: 4 }),
//     body('last_name',"The last Name must be of minimum 4 characters length").notEmpty().trim().isLength({ min: 4 }),
//     body('phone_number',"The phone number must be of minimum 10 characters length").notEmpty().trim().isLength({ min: 10 }),
//     body('state',"The state must be of minimum 5 characters length").notEmpty().trim().isLength({ min: 5 }),
//     body('district',"The district must be of minimum 5 characters length").notEmpty().trim().isLength({ min: 5 }),
//     body('pincode',"The pincode must be of minimum 5 characters length").notEmpty().trim().isLength({ min: 5 }),
// ], register);


// router.post('/login',[
//     body('email',"Invalid email address").notEmpty().escape().trim().isEmail(),
//     body('password',"The Password must be of minimum 4 characters length").notEmpty().trim().isLength({ min: 4 }),
// ],login);

// router.get('/getuser',getUser);

// module.exports = router;