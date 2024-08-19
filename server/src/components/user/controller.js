const User = require("./model");
const logger = require("../../config/logger");
const catchAsync = require('./middlewares/catchAsync');


const createUser = catchAsync(async (req, res) => {
    const { email } = req.body;

    try {
        const user = new User({ email});
        await user.save();
        res.send(user);
    } catch (error) {
        logger.error(error)
        res.status(500).send(error);
    }
});

const getUserById = catchAsync(async (req, res) => {
    const { objectId } = req.params;

    try {
        const users = await User.findById(objectId);
        res.send(users);
    } catch (error) {
        logger.error(error)
        res.status(500).send(error);
    }
})

const getUserReferralCodeById = catchAsync(async (req, res) => {
    try {
        if (req.user){
            res.status(200).send({code: req.user._id});
        } else {
            res.status(401).send(null);
        }
    } catch (error) {
        logger.error(error)
        res.status(500).send(error);
    }
})

const deleteUser = catchAsync(async (req, res) => {
    const { objectId } = req.params;
    try {
        await User.findByIdAndDelete(objectId);
        res.status(201).send("Ok");
    } catch (error) {
        logger.error(error)
        res.status(500).send(error);
    }
});


module.exports = {
    createUser,
    getUserById,
    getUserReferralCodeById,
    deleteUser
}
