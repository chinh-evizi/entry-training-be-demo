const Joi = require('joi');

const companyValidate = (data) => {
    const rule = Joi.object({
        companyName: Joi.string().min(4).max(225).required(),
        logo: Joi.string(),
        website: Joi.string().max(225),
        phoneNumber: Joi.string().min(8).max(20),
        address: Joi.string().max(225),
    })

    return rule.validate(data);
}

module.exports.companyValidate = companyValidate;