const jwt = require("jsonwebtoken");
var authenticate = function(req, res, next) {
    if (req.body.token) {
        jwt.verify(req.body.token, process.env.JWT_SECRET, function(err, decoded) {
            if (decoded) {
                next();
            } else {
                res.json({
                    message: "Token is not valid"
                })
            }
        });
        //next();
    } else {
        res.json({
            message: "Not Authenticated"
        });
    }
};

module.exports = { authenticate };