const express = require('express');
const router = express.Router();
const cards = require('../controllers/cards')
const catchAsync = require('../utils/CatchAsync');
const {isLoggedIn, validateCard} = require('../middleware');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })

// Rout to edit cards
router.route('/')
  .get(
    catchAsync(cards.index)
  ) // WARNING: add isLogged
  .post(
    validateCard,
    catchAsync(cards.post))

// Route to post cards to page
router.route('/new')
  .get(
    catchAsync(cards.renderNewForm)) // WARNING: add isLogged
  // .post(
  //   validateCard,
  //   catchAsync(cards.newPost))
  .post(upload.array('image'), (req, res) => {
    console.log(req.body, req.files);
  })

// Rout to a Spesific cards edit page
router.route('/:id')
  .get(
    catchAsync(cards.renderEditForm))
  .put(
    catchAsync(cards.editPost))
  .delete(
    catchAsync(cards.delete))

module.exports = router;
