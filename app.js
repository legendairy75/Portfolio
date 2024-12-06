if(process.env.NODE_ENV !== "production") {
  require('dotenv').config();
}

// TODO: require passport
//       add login rout
//       add logout rout

const express = require ('express');
const app = express();
const path = require('path');
const catchAsync = require('./utils/CatchAsync');
const ExpressError = require('./utils/ExpressError.js');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const morgan = require('morgan');
// const Joi = require('joi');
const {cardSchema} = require('./schemas.js');
const Language = require ('./models/lang');
const Card = require('./models/card');
// const bootstrap = require('bootstrap')
const passport = require('passport');
const localStrategy = require('passport-local');
const User = require('./models/user');

const userRouts = require('./routes/Users.js')
const cards = require('./routes/cards')

const mongoose = require ('mongoose');

//connenction to mongoose
mongoose.connect('mongodb://127.0.0.1:27017/portfolio')
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!")
  })
  .catch(err => {
      console.log("OH NO ERROR!!!")
      console.log(err)
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

app.use(express.static(__dirname + '/public'));

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')))

const sessionConfig = {
  secret: 'Thisisasecret!!!',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  }
}
app.use(session(sessionConfig))
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

app.use(morgan('dev'));

app.use('/', userRouts)
app.use('/edit', cards)

// home page route
app.get('/', catchAsync( async (req, res) => {
  const cards = await Card.find({});
  res.render('home', { cards });
  // console.log('home page opened!');
}));

//just a test rout (not importaint)
app.get ('/test', async (req, res) => {
  //res.send('<h1> This is the route test page</h1>')
  res.render('test')
})

app.all('*', (req, res, next) => {
  // res.send("404!!!")
  next(new ExpressError('Page Not Found', 404))
})

app.use((err, req, res, next) =>{
  const {statusCode = 500 } = err;
  if (!err.message) err.message = 'Oh No, Something Went Wrong!'
  res.status(statusCode).render('error', { err });
  // res.send('Uh Oh, Something went wrong!')
})

app.listen(3000, () =>{
  console.log('App listening on port 3000!');
})
