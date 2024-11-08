const Card = require ('../models/card')
const mongoose = require ('mongoose');
const { title, body } = require('./cardHelpers');

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

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Card.deleteMany({});
  //const c = new Card({ title: 'I am groot' });
  //await c.save();
  for(let i = 0; i < 5; i++){
    //const randomCard = math.floor(Math.random() * 18);
    const card = new Card({
      title:`${sample(title)}`,
      body:`${sample(body)}`
    })
    await card.save();
  }
}

seedDB().then(() => {
  mongoose.connection.close();
});
