const express = require('express');
const passport = require("passport");

const routerPath = "/auth"
const router = express.Router();

router.get("/login/success", (req, res) => {
    if (req.user) {
        res.json({
            success: true,
            user: req.user,
            cookies: req.cookies
        });
    }
});

router.get("/login/failed", (req, res) => {
    res.status(401).json({
        success: false,
        message: "user failed to authenticate"
    });
});

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect(process.env.CLIENT_HOME_PAGE_URL);
});

router.get("/google", passport.authenticate("google", { scope: ['email']}));

router.get(
    "/google/redirect",
    passport.authenticate("google", {
        successRedirect: process.env.CLIENT_HOME_PAGE_URL,
        failureRedirect: "/api/auth/login/failed"
    })
);

module.exports = {
    routerPath,
    router
};
