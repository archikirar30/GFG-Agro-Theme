// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth2').Strategy;
  
// passport.serializeUser((user , done) => {
//     done(null , user);
// })
// passport.deserializeUser(function(user, done) {
//     done(null, user);
// });
  
// passport.use(new GoogleStrategy({
//     clientID:"653797583340-bvbmr7472buqtqn3qdq2bdn38nf7v4th.apps.googleusercontent.com", // Your Credentials here.
//     clientSecret:"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", // Your Credentials here.
//     callbackURL:"http://localhost:3000/auth/callback",
//     passReqToCallback:true
//   },
//   function(request, accessToken, refreshToken, profile, done) {
//     return done(null, profile);
//   }
// ));