const Joi = require('joi');

exports.loadValidation = (data) => {
    const schema = Joi.object({
        status: Joi.string().valid('NEW', 'POSTED', 'ASSIGNED', 'SHIPPED'),
        state: Joi.string().valid('En route to Pick Up', 'Arrived to Pick Up', 'En route to delivery', 'Arrived to delivery'),
        name: Joi.string().required(),
        payload: Joi.number().greater(0).less(4000).required(),
        pickup_address: Joi.string().required(),
        delivery_address: Joi.string().required(),
        dimensions: Joi.object({
            width: Joi.number().required(),
            length: Joi.number().required(),
            height: Joi.number().required(),
        })
    });

    return schema.validate(data);
}