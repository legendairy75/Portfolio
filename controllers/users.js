const User = require('../models/user');

module.exports.login = (req, res) => {
  res.render('users/login');
}

module.exports.loginRedirect = (req, res) => {
  req.flash('success', 'Welcome back!');
  const redirectUrl = res.locals.returnTo || '/';
  res.redirect(redirectUrl);
}

module.exports.logout = (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next (err);
    }

  req.flash ('success', "Logged you out!");
  res.redirect('/')
  });
  
}
