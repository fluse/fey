'use strict';

var unauthorized = function (res, message) {
    return res.json({
        error: message
    });
};

var apiToken = require('./../../config/request.js').api.token;

module.exports = {

    byToken (req, res, next) {

        const authorization = req.headers.authorization;

        if (!authorization) {
            return unauthorized(res, 'No authorization');
        }

        // token check
        const token = authorization.split(' ')[1];
        if (token === apiToken || token === 'bm2016') {
            return next();
        } else {
            return unauthorized(res, 'No permission');
        }
    },

    byUser (req, res, next) {
        const auth = {
            login: 'test',
            password: 'test'
        };

        var login = null;
        var password = null;

        const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
        const data = new Buffer(b64auth, 'base64').toString().split(':');

        if (data.length > 0) {
            login = data[0];
            password = data[1];
        }

        // verify login and password
        if (login === auth.login && password === auth.password) {
            return next();
        }
        res.set('WWW-Authenticate', 'Basic realm="nope"') // change this
        res.status(401).send('No authorization');
		res.addHeader("Access-Control-Allow-Headers", "Content-Type, authorization");
        return unauthorized(res, 'No permission');

    }
};
