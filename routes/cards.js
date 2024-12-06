const express = require('express');
const router = express.Router();
const cards = require('../controllers/cards')
const catchAsync = require('../utils/CatchAsync');
const {isLoggedIn, validateCard} = require('../middleware');
const multer = require('multer');
const{ storage } = require('../cloudinary');
const upload = multer({ storage });

// Rout to edit cards
router.route('/')
  .get(
    // isLoggedIn,
    catchAsync(cards.index)
  )
  .post(
    // isLoggedIn,
    validateCard,
    catchAsync(cards.post))

// Route to post cards to page
router.route('/new')
  .get(
    // isLoggedIn,
    catchAsync(cards.renderNewForm))
  .post(
    // isLoggedIn,
    upload.array('image'),
    // validateCard,
    catchAsync(cards.newPost))
  // .post(upload.array('image'), (req, res) => {
  //   console.log(req.body, req.files);
  //   res.send("IT WORKED!!")
  // })

// Rout to a Spesific cards edit page
router.route('/:id')
  .get(
    catchAsync(cards.renderEditForm))
  .put(
    // isLoggedIn,
    // validateCard,
    catchAsync(cards.editPost))
  // .put(upload.array('image'), (req, res) => {
  //
  //   console.log(req.files),
  //   res.send("ITWORKED!!!")
  //
  // })
  .delete(
    catchAsync(cards.delete))

module.exports = router;
