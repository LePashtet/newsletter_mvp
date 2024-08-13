const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require("../user/model")
const logger = require("../../config/logger");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        })
        .catch(e => {
            done(new Error("Failed to deserialize an user"));
        });
});

passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/api/auth/google/redirect",
        passReqToCallback : true
    },
    async (req, token, tokenSecret, profile, done) => {
        if (!req.user) {
            const currentUser = await User.findOne({
                googleId: profile.id
            });

            if (!currentUser) {
                try {
                    const referrer = await User.findById(req.query.referrer)

                    const newUser = await User.create({
                        name: profile._json.name,
                        googleId: profile.id,
                        email: profile._json.email,
                        referralId: referrer ? referrer?._id : null
                    })
                    done(null, newUser);
                } catch (error) {
                    logger.error(error)
                }

            }
            done(null, currentUser);
        } else {
            const currentUser = await User.findByIdAndUpdate({
                googleId: req.user.googleId
            }, {googleId: [...req.user.googleId, profile.id]});
            done(null, currentUser);
        }

    }
))

module.exports = passport
