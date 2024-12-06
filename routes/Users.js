const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/CatchAsync');

const users = require('../controllers/users.js')

const { storeReturnTo } = require('../middleware');

// router.get('/register', (req, res) => {
//   res.render('users/register')
// })
//
// router.post('/register', catchAsync(async (req, res, next) => {
//   try {
//   const { email, username, password } = req.body;
//   const user = new User({ email, username });
//   const registeredUser = await User.register(user, password);
//   req.login(registeredUser, err => {
//       if(err) return next(err)
//   req.flash('success','Welcome!');
//   res.redirect('/');
//     })
//   // console.log(registeredUser);
//   } catch(e) {
//     req.flash('error',e.message);
//     res.redirect('register');
//   }
//
// }));

router.get('/login', users.login)

router.post(
  '/login',
  storeReturnTo,
  passport.authenticate(
    'local',
    {failureFlash:
      true,
      failureRedirect:
      '/login'
    }
  ),
  users.loginRedirect)

router.get('/logout', users.logout);

module.exports = router;
