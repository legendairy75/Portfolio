
const {cardSchema} = require('./schemas.js');
const ExpressError = require('./utils/ExpressError.js');
const Card = require('./models/card');

module.exports.isLoggedIn = (req, res, next) => {
  // console.log("REQ.USER...", req.user);
  if (!req.isAuthenticated()) {
    req.session.returnTo = req.originalUrl
    req.flash('error', 'You must be signed in');
    return res.redirect('/login');
  }
  next();
}

module.exports.validateCard = (req, res, next) =>{
  const { error } = cardSchema.validate(req.body);
  if(error){
    const msg = error.details.map(el => el.message).join(',')
    throw new ExpressError(msg, 400)
  }
  // console.log(result);
  else {
    next();
  }
}


module.exports.storeReturnTo = (req, res, next) => {
  if (req.session.returnTo) {
    res.locals.returnTo = req.session.returnTo;
  }
  next();
}
