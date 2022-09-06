"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send("Access Denied");
}
var router = (0, express_1.Router)();
exports.router = router;
router.get("/", function (req, res) {
    console.log("req.session", req.session);
    if (req.session && req.session.loggedIn) {
        return res.send("\n      <div>\n          <div>You are logged in </div>\n          <a href=\"/logout\">Logout</a>\n      </div>\n    ");
    }
    else {
        return res.send("\n      <div>\n        <div>You are logged out </div>\n        <a href=\"/login\">Login</a>\n      </div>\n    ");
    }
});
router.get("/logout", function (req, res) {
    console.log("req.session", req.session);
    req.session = undefined;
    return res.redirect("/");
});
router.get("/protected", requireAuth, function (req, res) {
    res.send("Welcome to Protected Route Logged in User");
});
