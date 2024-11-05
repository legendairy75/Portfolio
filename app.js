// TODO: 

const express = require ('express');
const app = express();
const path = require('path');
const catchAsync = require('./utils/CatchAsync');
const ejsMate = require('ejs-mate');
const Language = require ('./models/lang');
const Card = require('./models/card');

const mongoose = require ('mongoose');

//connenction to mongoose
mongoose.connect('mongodb://127.0.0.1:27017/portfolio')
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!")
  })
  .catch(err => {
      console.log("OH NO ERROR!!!")
      console.log(err)
  //useNewUrlParser: true,
  //useCreateIndex: true,app.set('view engine', 'ejs');
  //useUnifiedTopology: true
})


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

app.use(express.static(__dirname + '/public'));

app.engine = ('ejs');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({extended: true}))

// home page route
app.get('/', async (req, res) => {
  const cards = await Card.find({});
  res.render('home', { cards });
  console.log('home page opened!');
});

// Rout to edit cards
app.get('/cards', async (req, res) => {
  const cards = await Card.find({});
  res.render('cards/index', { cards })
  console.log('edit page opened')
})

// Route to post cards to page
app.post('/cards', async (req, res) => {
  //res.send(req.body);
  const card = new Card(req.body.card);
  await card.save();
  res.redirect('/cards')
})

//just a test rout (not importaint)
app.get ('/test', async (req, res) => {
  //res.send('<h1> This is the route test page</h1>')
  res.render('test')
})

/*app.post('/lang', catchAsync(async (req, res) => {
  const lang = new Language(req.body.lang);
  body.langs.push(lang);
  lang.save();
  console.log('language added!')
}))*/

app.listen(3000, () =>{
  console.log('App listening on port 3000!');
})
