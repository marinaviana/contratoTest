const schemaPosts = Joi.array().items(Joi.object().keys({ 
    userId: Joi.number(),
    id: Joi.number(),
    title: Joi.string(),
    body: Joi.string()
}));

module.exports = {
    schemaPosts
}