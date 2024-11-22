const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/CatchAsync');
// const validateForm = require('../public/validateForm')
const {cardSchema} = require('../schemas.js');
const ExpressError = require('../utils/ExpressError.js');
const Card = require('../models/card');

const validateCard = (req, res, next) =>{
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

// Rout to edit cards
router.get('/', catchAsync( async (req, res) => {
  const cards = await Card.find({});
  res.render('cards/index', { cards })
  // console.log('edit page opened')
}))

// Route to post cards to page
router.post('/', validateCard, catchAsync( async (req, res, next) => {
  //res.send(req.body);
  // if(!req.body.card) throw new ExpressError('Invalid Data!', 400)
  
  const card = new Card(req.body.card);
  await card.save();
  req.flash('success', 'Successfully made a new card!');

  res.redirect('/edit')
}))

// Rout to a Spesific cards edit page
router.get('/:id', catchAsync( async (req, res) =>{
  // console.log('card in edit mode!')
  // res.send('<h1>THIS CARD IS IN EDIT MODE!!!</h1>')
  const card = await Card.findById(req.params.id)
  if(!card){
    req.flash('error', 'Cant find Card!');
    return res.redirect('/edit');
  }
  res.render('cards/edit', { card })
}))

router.put('/:id', catchAsync( async (req, res) => {
  // res.send('IT WORKED!!!')
  // console.log('card has been updated!')
  const { id } = req.params;
  const card = await Card.findByIdAndUpdate(id, { ...req.body.card})
  req.flash('success', 'Successfully updated card!');
  res.redirect(`/edit/${card._id}`)
}))
// TODO: redirect path NOT right
//
router.delete('/:id', catchAsync( async (req, res) => {
  // res.send('CARD DELETED!!!');
  // console.log('card has been deleted!')
  const { id } = req.params;
  await Card.findByIdAndDelete(id);
  req.flash('success', 'Successfully deleted card!');
  res.redirect('/edit')
}))

module.exports = router;
