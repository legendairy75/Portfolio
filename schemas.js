const Joi = require('joi');

module.exports.cardSchema = Joi.object({
    card:Joi.object({
      title: Joi.string().required(),
      body: Joi.string(),
      link: Joi.string(),
      linkT: Joi.string(),
      list: Joi.array(),
      // image: Joi.array().required(),
    }).required(),
    deleteImages: Joi.array()
  })


