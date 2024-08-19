const Newsletter = require("./model");
const logger = require("../../config/logger");
const catchAsync = require('./middlewares/catchAsync');
const Joi = require("joi");

const createNewsletter = catchAsync(async (req, res) => {
    const { name, mediaList,time, location } = req.body;
    try {
       if (req.user){
           let newsletter = await Newsletter.findOne({name, userId:req.user._id });
           if (!newsletter) {
               newsletter = await Newsletter.create({name, mediaList,time, location, userId: req.user._id})
               res.status(201).send(newsletter);
           } else {
               res.status(400).send({error: "Newsletter exists"});
           }
       }
    } catch (error) {
        logger.error(error)
        res.status(500).send(error);
    }
});

module.exports = {
    createNewsletter,
}
