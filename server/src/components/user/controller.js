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

const deleteUser = catchAsync(async (req, res) => {
    const { objectId } = req.params;

    try {
        const user = await User.findByIdAndDelete(objectId);
        res.send(user);
    } catch (error) {
        logger.error(error)
        res.status(500).send(error);
    }
});


module.exports = {
    createUser,
    getUserById,
    deleteUser
}
