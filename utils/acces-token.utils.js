const HttpError = require("./http-error.utils");
const jwt = require('jsonwebtoken');

function validAccessToken(
    req,
    res,
    next
) {
    return new Promise(async () => {
        let bearerToken = req.headers.authorization;

        if (bearerToken === undefined) {
            const error = new HttpError("Vous n'êtes pas authorisé", 401)

            return res.status(error.statusCode).send(error.message)
        }

        bearerToken = bearerToken.includes('Bearer ')
            ? bearerToken.split('Bearer ')[1]
            : bearerToken;

        return !!jwt.verify(bearerToken, process.env.PRIVATE_KEY_JWT) ? next() : res.status(error.statusCode).send(error.message)
    });
}

module.exports = validAccessToken