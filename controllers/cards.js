const Card = require('../models/card');

// for edit page
module.exports.index = async (req, res) => {
  const cards = await Card.find({});
  res.render('cards/index', { cards })
};

module.exports.post = async (req, res, next) => {
  const card = new Card(req.body.card);
  await card.save();
  req.flash('success', 'Successfully made a new card!');

  res.redirect('/edit')
}

// for new page
module.exports.renderNewForm = async(req, res) => {
  res.render('cards/new')
}

module.exports.newPost = async (req, res, next) => {
  const card = new Card(req.body.card);
  await card.save();
  req.flash('success', 'Successfully made a new card!');
  res.redirect('/edit')
}

// for id edit
module.exports.renderEditForm = async (req, res) =>{
  const card = await Card.findById(req.params.id)
  if(!card){
    req.flash('error', 'Cant find Card!');
    return res.redirect('/edit');
  }
  res.render('cards/edit', { card })
}

module.exports.editPost = async (req, res) => {
  const { id } = req.params;
  const card = await Card.findByIdAndUpdate(id, { ...req.body.card})
  req.flash('success', 'Successfully updated card!');
  res.redirect(`/edit/${card._id}`)
}

module.exports.delete = async (req, res) => {
  const { id } = req.params;
  await Card.findByIdAndDelete(id);
  req.flash('success', 'Successfully deleted card!');
  res.redirect('/edit')
}
